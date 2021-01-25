const fs = require('fs');

const config = require('./config');
const aerodrome = require('./aerodrome');


// -----------------------------------------------------
// -----------------------------------------------------


let acds = config.AERODROME_CODES;


let HTML_FILES_PATH = `${config.EXPORT_PATH}/html`;
let JSON_FILES_PATH = `${config.EXPORT_PATH}/json`;
let GEOJSON_FILES_PATH = `${config.EXPORT_PATH}/geojson`;


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {

	if (!fs.existsSync(config.EXPORT_PATH)) fs.mkdirSync(config.EXPORT_PATH);
	if (!fs.existsSync(HTML_FILES_PATH)) fs.mkdirSync(HTML_FILES_PATH);
	if (!fs.existsSync(JSON_FILES_PATH)) fs.mkdirSync(JSON_FILES_PATH);
	if (!fs.existsSync(GEOJSON_FILES_PATH)) fs.mkdirSync(GEOJSON_FILES_PATH);
	
	await aerodrome.main(acds);
}

main();