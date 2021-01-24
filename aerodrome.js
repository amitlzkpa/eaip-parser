const fs = require('fs');
// const https = require('https');
const axios = require('axios');
const changeCase = require('change-case');
const cheerio = require('cheerio');

const utils = require('./utils');


// https.globalAgent.options.ca = require('ssl-root-cas/latest').create();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
let allowFetch = false;
allowFetch = true;


// -----------------------------------------------------
// -----------------------------------------------------


async function fetchStationPages() {

	if (!allowFetch) return;

	let sources = [
		{
			name: 'met-stations',
			url: 'https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-GEN%203.5-en-GB.html'
		},
		{
			name: 'licensing-status',
			url: 'https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-AD%201.5-en-GB.html'
		},
		{
			name: 'aerodrome-index',
			url: 'https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-AD%201.3-en-GB.html'
		},
		{
			name: 'night-aerodromes',
			url: 'https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-AD%201.4-en-GB.html'
		}
	];

	for(let src of sources) {
		const res = await axios.get(src.url);
		fs.writeFileSync(`./exported-data/${src.name}.html`, res.data.toString());
	}
}



let metStnRawPath = './exported-data/met-stations.html';
let metStnJsnPath = './exported-data/jsons/met-stations.json';
let MET_STATIONS = {};

let licStsRawPath = './exported-data/licensing-status.html';
let licStsJsnPath = './exported-data/jsons/licensing-status.json';
let LIC_STATIONS = {};

let ardStnRawPath = './exported-data/aerodrome-index.html';
let ardStnJsnPath = './exported-data/jsons/aerodrome-index.json';
let ARD_STATIONS = {};

let ngtStnRawPath = './exported-data/night-aerodromes.html';
let ngtStnJsnPath = './exported-data/jsons/night-aerodromes.json';
let NGT_STATIONS = {};

let AIRPORT_DATA = {};
let aptJsnPath = './exported-data/jsons/airports.json';

async function parseMetPage() {

	let txt, $, r;

	txt = await fs.readFileSync(metStnRawPath, 'utf-8');
	$ = cheerio.load(txt);

	let metStations = {};
	let metStnTblIdx = 3;
	let metStnCnt = $(`table:eq(${metStnTblIdx})`).find('tr').length;
	for(let rIdx = 1; rIdx < metStnCnt; rIdx++) {
		let stnLoc = $(`table:eq(${metStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().split('/');
		if(stnLoc.length !== 2) continue;
		let name = stnLoc[0].replace(/\s+/g, '');
		let code = stnLoc[1].replace(/\s+/g, '');
		let reportingFrequency = $(`table:eq(${metStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let reportTypes = $(`table:eq(${metStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim();
		let observingSystem = utils.arrayedParaLines($(`table:eq(${metStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(3)').text().trim());
		let hoursOfOperation = $(`table:eq(${metStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(4)').text().trim();
		let climatologyInformation = $(`table:eq(${metStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(5)').text().trim();
		let stationInfo = {
			name,
			code,
			reportingFrequency,
			reportTypes,
			observingSystem,
			hoursOfOperation,
			climatologyInformation
		};
		metStations[code] = stationInfo;
	}
	MET_STATIONS = metStations;

	console.log(`Total MET stations: ${Object.keys(MET_STATIONS).length}`);
	fs.writeFileSync(metStnJsnPath, JSON.stringify(MET_STATIONS, null, 4));

}


async function parseLicPage() {

	let txt, $, r;

	txt = await fs.readFileSync(licStsRawPath, 'utf-8');
	$ = cheerio.load(txt);

	let licStations = {};
	let licStnTblIdx = 1;
	let licStnCnt = $(`table:eq(${licStnTblIdx})`).find('tr').length;
	for(let rIdx = 1; rIdx < licStnCnt; rIdx++) {
		let name = $(`table:eq(${licStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let code = $(`table:eq(${licStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim();
		let stationInfo = {
			name,
			code
		};
		licStations[code] = stationInfo;
	}
	LIC_STATIONS = licStations;

	console.log(`Total licensed stations: ${Object.keys(LIC_STATIONS).length}`);
	fs.writeFileSync(licStsJsnPath, JSON.stringify(LIC_STATIONS, null, 4));

}


async function parseArdPage() {

	let txt, $, r;

	txt = await fs.readFileSync(ardStnRawPath, 'utf-8');
	$ = cheerio.load(txt);

	let ardStations = {};
	let ardStnTblIdx = 0;
	let ardStnCnt = $(`table:eq(${ardStnTblIdx})`).find('tr').length;
	for(let rIdx = 3; rIdx < ardStnCnt; rIdx++) {
		let name = $(`table:eq(${ardStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
		let code = $(`table:eq(${ardStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let intlDom = $(`table:eq(${ardStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim();
		let allowedFlightRules = $(`table:eq(${ardStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(3)').text().trim();
		let allowedFlightPlans = $(`table:eq(${ardStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(4)').text().trim();
		let stationInfo = {
			name,
			code,
			intlDom,
			allowedFlightRules,
			allowedFlightPlans
		};
		ardStations[code] = stationInfo;
	}
	ARD_STATIONS = ardStations;

	console.log(`Total aerodromes: ${Object.keys(ARD_STATIONS).length}`);
	fs.writeFileSync(ardStnJsnPath, JSON.stringify(ARD_STATIONS, null, 4));

}


async function parseNgtPage() {

	let txt, $, r;

	txt = await fs.readFileSync(ngtStnRawPath, 'utf-8');
	$ = cheerio.load(txt);

	let ngtStations = {};
	let ngtStnTblIdx = 1;
	let ngtStnCnt = $(`table:eq(${ngtStnTblIdx})`).find('tr').length - 1;
	for(let rIdx = 4; rIdx < ngtStnCnt; rIdx++) {
		let name = $(`table:eq(${ngtStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
		let code = $(`table:eq(${ngtStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
		let stationInfo = {
			name,
			code
		};
		ngtStations[code] = stationInfo;
	}
	NGT_STATIONS = ngtStations;

	console.log(`Total night aerodromes: ${Object.keys(NGT_STATIONS).length}`);
	fs.writeFileSync(ngtStnJsnPath, JSON.stringify(NGT_STATIONS, null, 4));

}


async function consolidateAirportData() {

	AIRPORT_DATA = {};

	for(let code of Object.keys(ARD_STATIONS)) {
		let d = {};
		d.code = code;
		d.name = ARD_STATIONS[code].name;
		d.shortName = MET_STATIONS[code] ? changeCase.capitalCase(MET_STATIONS[code].name) : '';
		d.metar = MET_STATIONS[code];
		let traffic = {};
		if (ARD_STATIONS[code]) {
			traffic = {
				vfr: ARD_STATIONS[code].allowedFlightRules.includes('VFR'),
				ifr: ARD_STATIONS[code].allowedFlightRules.includes('IFR'),
				international: ARD_STATIONS[code].intlDom.includes('INTL'),
				domestic: ARD_STATIONS[code].intlDom.includes('DOM'),
				scheduled: ARD_STATIONS[code].allowedFlightPlans.includes('S '),
				nonScheduled: ARD_STATIONS[code].allowedFlightPlans.includes('NS'),
				private: ARD_STATIONS[code].allowedFlightPlans.includes(' P')
			};
		}
		d.traffic = traffic;
		AIRPORT_DATA[code] = d;
	}

	console.log(`Total airports: ${Object.keys(AIRPORT_DATA).length}`);
	fs.writeFileSync(aptJsnPath, JSON.stringify(AIRPORT_DATA, null, 4));

}


async function parseStationPages() {
	await parseMetPage();
	await parseLicPage();
	await parseArdPage();
	await parseNgtPage();
	await consolidateAirportData();
}


async function suckStationPages() {

	await fetchStationPages();
	await parseStationPages();

}


// -----------------------------------------------------
// -----------------------------------------------------



async function fetchAerodromeData(acd) {

	if (!allowFetch) return;

	console.log(`Fetching data for ${acd}`);
	const res = await axios.get(`https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-AD%202.1${acd}-en-GB.html`);
	fs.writeFileSync(`./exported-data/${acd}.html`, res.data.toString());
	console.log(`Fetched data for ${acd}`);

}


async function parseAerodromeData(acd) {

	console.log(`Parsing data for ${acd}`);


	let txt = await fs.readFileSync(`./exported-data/${acd}.html`, 'utf-8');
	let $ = cheerio.load(txt);
	let r;
	let info = AIRPORT_DATA[acd];

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


	fs.writeFileSync(`./exported-data/jsons/${acd}.json`, JSON.stringify(info, null, 4));


	console.log(`Parsed data for ${acd}`);

}


async function suckAerodromeData(acd) {

	// await fetchAerodromeData(acd);
	await parseAerodromeData(acd);

}


async function suckAllAerodromeData(acds) {

	let features = [];

	for(let acd of acds) {
		await suckAerodromeData(acd);

		let aData = AIRPORT_DATA[acd];
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
			...AIRPORT_DATA[acd].traffic,
			...extra
		};

		let feat = {
	      type: "Feature",
	      properties: props,
	      geometry: {
	        "type": "Point",
	        "coordinates": AIRPORT_DATA[acd].location
	      }
	    };
	    features.push(feat);
	}

	let geoJson = {
		type: "FeatureCollection",
		features: features
	};

	fs.writeFileSync(`./exported-data/jsons/airports-geodata.geojson`, JSON.stringify(geoJson, null, 4));

}


// -----------------------------------------------------
// -----------------------------------------------------


async function main(acds) {

	await suckStationPages();
	await suckAllAerodromeData(acds);

}


// -----------------------------------------------------
// -----------------------------------------------------


module.exports = {
	suckAerodromeData,
	suckAllAerodromeData,
	main
}