const fs = require('fs');
const csvtojson = require('csvtojson');
const changeCase = require('change-case');

const config = require('./config');
const aerodrome = require('./aerodrome');
const vors = require('./vors');


// -----------------------------------------------------
// -----------------------------------------------------


let acds = config.AERODROME_CODES;


let HTML_FILES_PATH = `${config.EXPORT_PATH}/html`;
let JSON_FILES_PATH = `${config.EXPORT_PATH}/json`;


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {

	if (!fs.existsSync(config.EXPORT_PATH)) fs.mkdirSync(config.EXPORT_PATH);
	if (!fs.existsSync(HTML_FILES_PATH)) fs.mkdirSync(HTML_FILES_PATH);
	if (!fs.existsSync(JSON_FILES_PATH)) fs.mkdirSync(JSON_FILES_PATH);
	
	await aerodrome.main(acds);
	await vors.main();
}

main();