const fs = require('fs');
// const https = require('https');
const axios = require('axios');
const changeCase = require('change-case');
const cheerio = require('cheerio');

const config = require('./config');
const utils = require('./utils');


// https.globalAgent.options.ca = require('ssl-root-cas/latest').create();
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;


let HTML_FILES_PATH = `${config.EXPORT_PATH}/html`;
let JSON_FILES_PATH = `${config.EXPORT_PATH}/json`;
let GEOJSON_FILES_PATH = `${config.EXPORT_PATH}/geojson`;


let metStnRawPath = `${HTML_FILES_PATH}/met-stations.html`;
let metStnJsnPath = `${JSON_FILES_PATH}/met-stations.json`;
let MET_STATIONS = {};

let licStsRawPath = `${HTML_FILES_PATH}/licensing-status.html`;
let licStsJsnPath = `${JSON_FILES_PATH}/licensing-status.json`;
let LIC_STATIONS = {};

let ardStnRawPath = `${HTML_FILES_PATH}/aerodrome-index.html`;
let ardStnJsnPath = `${JSON_FILES_PATH}/aerodrome-index.json`;
let ARD_STATIONS = {};

let ngtStnRawPath = `${HTML_FILES_PATH}/night-aerodromes.html`;
let ngtStnJsnPath = `${JSON_FILES_PATH}/night-aerodromes.json`;
let NGT_STATIONS = {};

let vorStnRawPath = `${HTML_FILES_PATH}/radio-positions.html`;
let vorStnJsnPath = `${JSON_FILES_PATH}/radio-positions.json`;
let VOR_STATIONS = {};

let AIRPORT_DATA = {};
let aptJsnPath = `${JSON_FILES_PATH}/airports.json`;


// -----------------------------------------------------
// -----------------------------------------------------


async function fetchStationPages() {

	if (!config.DOWNLOAD_HTML) return;

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
		},
		{
			name: 'radio-positions',
			url: 'https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-ENR%204.1-en-GB.html'
		}
	];

	for(let src of sources) {
		const res = await axios.get(src.url);
		fs.writeFileSync(`${HTML_FILES_PATH}/${src.name}.html`, res.data.toString());
	}
}


async function parseMetPage() {

	let txt, $;

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

	utils.log(`Total MET stations: ${Object.keys(MET_STATIONS).length}`);
	fs.writeFileSync(metStnJsnPath, JSON.stringify(MET_STATIONS, null, 2));

}


async function parseLicPage() {

	let txt, $;

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

	utils.log(`Total licensed stations: ${Object.keys(LIC_STATIONS).length}`);
	fs.writeFileSync(licStsJsnPath, JSON.stringify(LIC_STATIONS, null, 2));

}


async function parseArdPage() {

	let txt, $;

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

	utils.log(`Total aerodromes: ${Object.keys(ARD_STATIONS).length}`);
	fs.writeFileSync(ardStnJsnPath, JSON.stringify(ARD_STATIONS, null, 2));

}


async function parseNgtPage() {

	let txt, $;

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

	utils.log(`Total night aerodromes: ${Object.keys(NGT_STATIONS).length}`);
	fs.writeFileSync(ngtStnJsnPath, JSON.stringify(NGT_STATIONS, null, 2));

}


async function parseVorData() {

	let txt, $;

	txt = await fs.readFileSync(vorStnRawPath, 'utf-8');
	$ = cheerio.load(txt);

	let vorStations = {};
	let vorStnTblIdx = 0;
	let vorStnCnt = $(`table:eq(${vorStnTblIdx})`).find('tr').length;
	for(let rIdx = 2; rIdx < vorStnCnt; rIdx++) {
		try {
			let name = $(`table:eq(${vorStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(0)').text().trim();
			let code = $(`table:eq(${vorStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(1)').text().trim();
			let channel = utils.arrayedParaLines($(`table:eq(${vorStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(2)').text().trim())[0];
			let aisCoords = $(`table:eq(${vorStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(4)').text().trim();
			let location = utils.parseAISCoords(aisCoords);
			let elevation = $(`table:eq(${vorStnTblIdx})`).find(`tr:eq(${rIdx})`).find('td:eq(5)').text().trim();
			let stationInfo = {
				name,
				code,
				channel,
				location,
				elevation
			};
			vorStations[code] = stationInfo;
		} catch (ex) {

		}
	}
	VOR_STATIONS = vorStations;

	utils.log(`Total VOR stations: ${Object.keys(vorStations).length}`);
	fs.writeFileSync(vorStnJsnPath, JSON.stringify(vorStations, null, 2));

}


async function saveVorGeojson() {

	if (!config.EXPORT_GEOJSONS) return;

	let features = [];

	for(let vorData of Object.values(VOR_STATIONS)) {

		let props = {
			name: vorData.name,
			code: vorData.code,
			channel: vorData.channel,
			elevation: vorData.elevation
		};

		let feat = {
	      type: "Feature",
	      properties: props,
	      geometry: {
	        "type": "Point",
	        "coordinates": vorData.location
	      }
	    };
	    features.push(feat);
	}

	let geoJson = {
		type: "FeatureCollection",
		features: features
	};

	fs.writeFileSync(`${GEOJSON_FILES_PATH}/radio-positions-geodata.geojson`, JSON.stringify(geoJson, null, 2));

}


async function consolidateAirportData() {

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

	utils.log(`Total airports: ${Object.keys(AIRPORT_DATA).length}`);
	fs.writeFileSync(aptJsnPath, JSON.stringify(AIRPORT_DATA, null, 2));

}


async function parseStationPages() {
	await parseMetPage();
	await parseLicPage();
	await parseArdPage();
	await parseNgtPage();
	await parseVorData();
	await saveVorGeojson();
	await consolidateAirportData();
}


async function suckStationPages() {

	await fetchStationPages();
	await parseStationPages();

}


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {

	await suckStationPages();

}


// -----------------------------------------------------
// -----------------------------------------------------


module.exports = {
	AIRPORT_DATA,
	fetchStationPages,
	parseStationPages,
	main
}