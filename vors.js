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



async function fetchVorPages() {

	if (!allowFetch) return;

	console.log(`Fetching data for vors`);
	const res = await axios.get(`https://aim-india.aai.aero/eaip-v2-02-2020/eAIP/IN-ENR%204.1-en-GB.html`);
	fs.writeFileSync(`./exported-data/html/radios-position.html`, res.data.toString());
	console.log(`Fetched data for vors`);

}


// -----------------------------------------------------
// -----------------------------------------------------


let vorStnRawPath = './exported-data/html/radios-position.html';
let vorStnJsnPath = './exported-data/json/radios-stations.json';


let VOR_STATIONS = {};


async function parseVorData() {

	console.log(`Parsing data for vors`);

	let txt = await fs.readFileSync(vorStnRawPath, 'utf-8');
	let $ = cheerio.load(txt);

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

	console.log(`Total vor stations: ${Object.keys(vorStations).length}`);
	fs.writeFileSync(vorStnJsnPath, JSON.stringify(vorStations, null, 2));

	console.log(`Parsed data for vors`);

}


async function saveVorData() {

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

	fs.writeFileSync(`./exported-data/json/radios-geodata.geojson`, JSON.stringify(geoJson, null, 2));

}


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {

	await fetchVorPages();
	await parseVorData();
	await saveVorData();

}


// -----------------------------------------------------
// -----------------------------------------------------


module.exports = {
	main
}