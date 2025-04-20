const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, "./exported-data/json/airports.json");
const outputPath = path.join(__dirname, "./exported-data/summarized-airports.json");

function summarizeAirportData(data) {
  return Object.values(data).map((airport) => {
    return {
      code: airport.code,
      name: airport.name,
      shortName: airport.shortName,
      metar: {
        reportingFrequency: airport.metar?.reportingFrequency || '',
        reportTypes: airport.metar?.reportTypes || '',
        observingSystem: airport.metar?.observingSystem || [],
        hoursOfOperation: airport.metar?.hoursOfOperation || '',
        climatologyInformation: airport.metar?.climatologyInformation || ''
      },
      traffic: {
        vfr: airport.traffic?.vfr || false,
        ifr: airport.traffic?.ifr || false,
        international: airport.traffic?.international || false,
        domestic: airport.traffic?.domestic || false,
        scheduled: airport.traffic?.scheduled || false,
        nonScheduled: airport.traffic?.nonScheduled || false,
        private: airport.traffic?.private || false
      }
    };
  });
}

function main() {
  const rawData = JSON.parse(fs.readFileSync(inputPath, 'utf-8'));
  const summarized = summarizeAirportData(rawData);
  fs.writeFileSync(outputPath, JSON.stringify(summarized, null, 2));
  console.log(`✅ Summarized airport data written to ${outputPath}`);
}

main();
