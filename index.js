const fs = require('fs');
const csvtojson = require('csvtojson');
const changeCase = require('change-case');

const config = require('./config');
const aerodrome = require('./aerodrome');
const vors = require('./vors');


// -----------------------------------------------------
// -----------------------------------------------------


let acds = config.AERODROME_CODES;


// -----------------------------------------------------
// -----------------------------------------------------


async function main() {
	await aerodrome.main(acds);
	await vors.main();
}

main();