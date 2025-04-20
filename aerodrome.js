const fs = require('fs');
// const https = require('https');
const axios = require('axios');
const changeCase = require('change-case');
const cheerio = require('cheerio');

const config = require('./config');
const utils = require('./utils');
const stations = require('./stations');


// https.globalAgent.options.ca = require('ssl-root-cas/latest').create();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


// -----------------------------------------------------
// -----------------------------------------------------


async function fetchAerodromeData(acd) {

	if (!config.DOWNLOAD_HTML) return;

	utils.log(`Fetching data for ${acd}`);
	const res = await axios.get(`https://aim-india.aai.aero/eaip-v2-06-2024/eAIP/IN-AD%202.1${acd}-en-GB.html`);
	fs.writeFileSync(`${utils.HTML_FILES_PATH}/${acd}.html`, res.data.toString());
	utils.log(`Fetched data for ${acd}`);

}


async function parseAerodromeData(acd) {

	utils.log(`Parsing data for ${acd}`);


	let txt = await fs.readFileSync(`${utils.HTML_FILES_PATH}/${acd}.html`, 'utf-8');
	let $ = cheerio.load(txt);
	let r;
	let info = stations.AIRPORT_DATA[acd];

	// geo-coordinates
	r = $('td:eq(5)');
	let tb_locData = r.text().split('\n').filter(l => !!l.trim());
	let aisCoords = tb_locData[0];
	let gjCoords = utils.parseAISCoords(aisCoords);
	info.location = gjCoords;

	// relative location to major landmark at location
	r = $('td:eq(8)');
	let tb_aptLocData = r.text().trim();
	info.airportToCityRelativeLocation = tb_aptLocData;

	// airport elevation and reference temperature
	r = $('td:eq(11)');
	let tb_elevTempData = r.text().trim();
	let elvTmpData = tb_elevTempData.split(' / ');
	info.elevation = changeCase.noCase(elvTmpData[0]);
	info.referenceTemperature = elvTmpData[1];

	// address
	r = $('td:eq(17)');
	let tb_aptAddrData = r.text().trim().split('\n').join(' ');
	info.address = tb_aptAddrData;

	// phone
	r = $('td:eq(19)');
	let tb_aptPhoneData = r.text().match(/\S+/g);
	info.phone = tb_aptPhoneData;

	// email
	r = $('td:eq(25)');
	let tb_aptEmailData = r.text().split(/\n+/g).filter(l => !!l.trim());
	info.email = tb_aptEmailData;

	// remarks
	r = $('td:eq(31)');
	let tb_aptRmrkData = utils.arrayedParaLines(r.text());
	info.remarks = tb_aptRmrkData;

	// hours of operation for diff facilities
	let operatingHours = {};
	let opHrsTblIdx = 3;
	// let opHrsRCnt = $(`table:eq(${opHrsTblIdx})`).find('tr').length - 1; // excluding last row
	let opHrsRCnt = 12;
	for(let rIdx = 0; rIdx < opHrsRCnt; rIdx++) {
		let lbl = $(`table:eq(${opHrsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)');
		let hrs = $(`table:eq(${opHrsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)');
		operatingHours[lbl.text().trim()] = utils.arrayedParaLines(hrs.text().trim());
	}
	info.operatingHours = operatingHours;

	// services and facilities
	let servicesAndFacilities = {};
	let svFacTblIdx = 5;
	let svFacCnt = $(`table:eq(${svFacTblIdx})`).find('tr').length - 1; // excluding last row
	// let svFacCnt = 12;
	for(let rIdx = 0; rIdx < svFacCnt; rIdx++) {
		let lbl = $(`table:eq(${svFacTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)');
		let hrs = $(`table:eq(${svFacTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)');
		servicesAndFacilities[lbl.text().trim()] = utils.arrayedParaLines(hrs.text().trim());
	}
	info.servicesAndFacilities = servicesAndFacilities;

	// passenger facilities
	let passengerFacilities = {};
	let passFacTblIdx = 7;
	let passFacCnt = $(`table:eq(${passFacTblIdx})`).find('tr').length - 1; // excluding last row
	// let passFacCnt = 12;
	for(let rIdx = 0; rIdx < passFacCnt; rIdx++) {
		let lbl = $(`table:eq(${passFacTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)');
		let hrs = $(`table:eq(${passFacTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)');
		passengerFacilities[lbl.text().trim()] = utils.arrayedParaLines(hrs.text().trim());
	}
	info.passengerFacilities = passengerFacilities;

	// firefighting facilities
	let fireFacilities = {};
	let fireFacTblIdx = 9;
	let fireFacCnt = $(`table:eq(${fireFacTblIdx})`).find('tr').length - 1; // excluding last row
	// let fireFacCnt = 12;
	for(let rIdx = 0; rIdx < fireFacCnt; rIdx++) {
		let lbl = $(`table:eq(${fireFacTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)');
		let hrs = $(`table:eq(${fireFacTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)');
		fireFacilities[lbl.text().trim()] = utils.arrayedParaLines(hrs.text().trim());
	}
	info.fireFacilities = fireFacilities;

	// obstacles
	let obstacles = {};
	let obsTblIdx = 17;
	let obsCnt = $(`table:eq(${obsTblIdx})`).find('tr').length;
	for(let rIdx = 3; rIdx < obsCnt; rIdx++) {
		let runwaysAffected = utils.arrayedParaLines($(`table:eq(${obsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim());
		let type = $(`table:eq(${obsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let location = utils.parseAISCoords($(`table:eq(${obsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim().split('\n').join(' '));
		let elevation = changeCase.noCase($(`table:eq(${obsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(3)').text().trim());
		let remarks = utils.arrayedParaLines($(`table:eq(${obsTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(5)').text().trim());
		if (!obstacles[type]) obstacles[type] = [];
		let obsList = obstacles[type];
		obsList.push({
			runwaysAffected,
			location,
			elevation,
			remarks
		});
	}
	info.obstacles = obstacles;

	// meteorological info
	let meteorologicalInfo = {};
	let metInfoTblIdx = 19;
	let metInfoCnt = $(`table:eq(${metInfoTblIdx})`).find('tr').length;
	for(let rIdx = 0; rIdx < metInfoCnt; rIdx++) {
		let lbl = $(`table:eq(${metInfoTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)');
		let hrs = $(`table:eq(${metInfoTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)');
		meteorologicalInfo[lbl.text().trim()] = utils.arrayedParaLines(hrs.text().trim());
	}
	info.meteorologicalInfo = meteorologicalInfo;

	// runwayDetails
	let runwayDetails = {};
	let rwyTblIdx = 21;
	let rwyCnt = $(`table:eq(${rwyTblIdx})`).find('tr').length;
	for(let rIdx = 2; rIdx < rwyCnt; rIdx++) {
		let runwayNo = $(`table:eq(${rwyTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
		let trueBearing = $(`table:eq(${rwyTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let dimensions = $(`table:eq(${rwyTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim();
		let endsVal = utils.arrayedParaLines($(`table:eq(${rwyTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(4)').text().trim());
		let thrIdx = endsVal.findIndex(v => v.toLowerCase().includes('thr'));
		let endIdx = endsVal.findIndex(v => v.toLowerCase().includes('end'));
		let threshholdLocation = utils.parseAISCoords(`${endsVal[thrIdx+1]} ${endsVal[thrIdx+2]}`);
		let runwayendLocation = utils.parseAISCoords(`${endsVal[endIdx+1]} ${endsVal[endIdx+2]}`);
		runwayDetails[runwayNo] = {
			runwayNo,
			trueBearing,
			dimensions,
			threshholdLocation,
			runwayendLocation
		};
	}
	info.runwayDetails = runwayDetails;

	// runwayDistances
	let rwyDistTblIdx = 25;
	let rwyDistCnt = $(`table:eq(${rwyDistTblIdx})`).find('tr').length;
	for(let rIdx = 2; rIdx < rwyDistCnt; rIdx++) {
		let runwayNo = $(`table:eq(${rwyDistTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
		let takeoffRun = $(`table:eq(${rwyDistTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let takeoffDistance = $(`table:eq(${rwyDistTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim();
		let accelerationDistance = $(`table:eq(${rwyDistTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(3)').text().trim();
		let landingDistance = $(`table:eq(${rwyDistTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(4)').text().trim();
		let remarks = utils.arrayedParaLines($(`table:eq(${rwyDistTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(5)').text().trim());
		runwayDetails[runwayNo] = {
			...runwayDetails[runwayNo],
			takeoffRun,
			takeoffDistance,
			accelerationDistance,
			landingDistance,
			remarks
		};
	}

	// runwayLighting
	let rwyLgtTblIdx = 27;
	let rwyLgtCnt = $(`table:eq(${rwyLgtTblIdx})`).find('tr').length;
	for(let rIdx = 2; rIdx < rwyLgtCnt; rIdx++) {
		let runwayNo = $(`table:eq(${rwyLgtTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
		let approachLightingDetails = utils.arrayedParaLines($(`table:eq(${rwyLgtTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim());
		let thresholdLightingDetails = utils.arrayedParaLines($(`table:eq(${rwyLgtTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim());
		let visualSlopeIndicatorLightingDetails = utils.arrayedParaLines($(`table:eq(${rwyLgtTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(3)').text().trim());
		let touchdownZoneLightsLength = $(`table:eq(${rwyLgtTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(4)').text().trim();
		runwayDetails[runwayNo] = {
			...runwayDetails[runwayNo],
			approachLightingDetails,
			thresholdLightingDetails,
			visualSlopeIndicatorLightingDetails,
			touchdownZoneLightsLength
		};
	}

	// atsAirspace
	let atsAirspaceInfo = {};
	let atsAspcInfoTblIdx = 34;
	let atsAspcInfoCnt = $(`table:eq(${atsAspcInfoTblIdx})`).find('tr').length;
	for(let rIdx = 0; rIdx < atsAspcInfoCnt; rIdx++) {
		let lbl = $(`table:eq(${atsAspcInfoTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)');
		let hrs = $(`table:eq(${atsAspcInfoTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)');
		atsAirspaceInfo[lbl.text().trim()] = utils.arrayedParaLines(hrs.text().trim());
	}
	info.atsAirspaceInfo = atsAirspaceInfo;

	// radioFrequencies
	let radioFrequencies = {};
	let rdoFrqTblIdx = 36;
	let rdoFrqCnt = $(`table:eq(${rdoFrqTblIdx})`).find('tr').length;
	for(let rIdx = 2; rIdx < rdoFrqCnt; rIdx++) {
		let serviceDesignation = $(`table:eq(${rdoFrqTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
		let callSign = $(`table:eq(${rdoFrqTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let channel = $(`table:eq(${rdoFrqTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim();
		radioFrequencies[channel] = {
			serviceDesignation,
			callSign,
			channel
		};
	}
	info.radioFrequencies = radioFrequencies;


	fs.writeFileSync(`${utils.JSON_FILES_PATH}/${acd}.json`, JSON.stringify(info, null, 2));


	utils.log(`Parsed data for ${acd}`);

}


async function suckAerodromeData(acd) {

	await fetchAerodromeData(acd);
	await parseAerodromeData(acd);

}


async function suckAllAerodromeData(acds) {

	let features = [];

	for(let acd of acds) {
		await suckAerodromeData(acd);

		let aData = stations.AIRPORT_DATA[acd];
		let props = {};
		props.code = acd;
		props.name = aData.name;
		props.shortName = aData.shortName;
		let atisChannelData = Object.values(aData.radioFrequencies).find(f => f.serviceDesignation.toLowerCase().includes('atis')) || {};
		let twrChannelData = Object.values(aData.radioFrequencies).find(f => f.serviceDesignation.toLowerCase().includes('twr')) || {};
		let extra = {
			metarReportTypes: (aData.metar || {}).reportTypes,
			elevation: aData.elevation,
			address: aData.address,
			phone: aData.phone.join(','),
			email: aData.email.join(','),
			runways: Object.keys(aData.runwayDetails).join(','),
			airspaceClassification: aData.atsAirspaceInfo['Airspace classification'] ? aData.atsAirspaceInfo['Airspace classification'].join('') : '',
			radioFrequencies: Object.values(aData.radioFrequencies).map(o => `${o.serviceDesignation}:${o.channel}`).join('\n'),
			atisFreq: atisChannelData.channel,
			towerFreq: twrChannelData.channel
			// fuel: (aData.servicesAndFacilities["Fuel and Oil types"] || []).filter(t => t && t.toLowerCase() !== 'nil').join(' '),
			// hangar: (aData.servicesAndFacilities["Hangar space for visiting aircraft"] || []).filter(t => t && t.toLowerCase() !== 'nil').join(' '),
			// repair: (aData.servicesAndFacilities["Repair facilities for visiting aircraft"] || []).filter(t => t && t.toLowerCase() !== 'nil').join(' ')
		};
		props = {
			...props,
			...stations.AIRPORT_DATA[acd].traffic,
			...extra
		};

		let feat = {
			type: "Feature",
			properties: props,
			geometry: {
				"type": "Point",
				"coordinates": stations.AIRPORT_DATA[acd].location
			}
		};
		features.push(feat);
	}

	if (!config.EXPORT_GEOJSONS) return;

	let geoJson = {
		type: "FeatureCollection",
		features: features
	};

	fs.writeFileSync(`${utils.GEOJSON_FILES_PATH}/airports-geodata.geojson`, JSON.stringify(geoJson, null, 2));

}


// -----------------------------------------------------
// -----------------------------------------------------


async function main(acds) {

	utils.setupFolders();
	await stations.main();
	await suckAllAerodromeData(acds);

}


// -----------------------------------------------------
// -----------------------------------------------------


module.exports = {
	main
}