const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "output/airports-geodata.geojson");
const outputPath = path.join(__dirname, "output/summarized-airports.json");

function formatObstacleData(obstacles) {
  const formatted = [];

  for (const [type, items] of Object.entries(obstacles || {})) {
    items.forEach((item) => {
      formatted.push({
        type,
        location: item.location,
        elevation: item.elevation,
        runwaysAffected: item.runwaysAffected,
        remarks: item.remarks,
      });
    });
  }

  return formatted;
}

function main() {
  const geoJsonData = JSON.parse(fs.readFileSync(inputPath, "utf-8"));

  const summarized = geoJsonData.features.map((feature) => {
    const props = feature.properties;

    return {
      code: props.code,
      name: props.name,
      shortName: props.shortName,
      elevation: props.elevation,
      address: props.address,
      phone: props.phone,
      email: props.email,
      runways: props.runways,
      atisFreq: props.atisFreq,
      towerFreq: props.towerFreq,
      airspaceClassification: props.airspaceClassification,
      radioFrequencies: props.radioFrequencies,
      location: {
        lat: feature.geometry.coordinates[1],
        lon: feature.geometry.coordinates[0],
      },
      obstacles: formatObstacleData(props.obstacles),
    };
  });

  fs.writeFileSync(outputPath, JSON.stringify(summarized, null, 2));
  console.log(`✅ Summarized data with obstacles written to ${outputPath}`);
}

main();
