import runners from "./runners.js";
import races from "./races/index.js";
import {
  checkNewRunners,
  getGenderStatistics,
  getResults,
  getStatistics,
} from "./utils.js";

const WINNERS_LIMIT = 3;
let bestTimeRacesCount = 4;

// Display current results if an insufficient number of races have been held
if (races.length < bestTimeRacesCount) {
  bestTimeRacesCount = races.length;
}

// Throws error if new runners are introduced, runners import should be updated with newcomers
checkNewRunners(runners, races);

const statistics = getStatistics(runners, races);

const maleStatistics = getGenderStatistics(statistics, "M");
const maleResults = getResults(
  maleStatistics,
  bestTimeRacesCount,
  WINNERS_LIMIT
);

console.log(`MALE RESULTS - TOP (${maleResults.length}):`);
console.log(maleResults);

console.log("\n");
console.log("----");
console.log("\n");

const femaleStatistics = getGenderStatistics(statistics, "Ž");
const femaleResults = getResults(
  femaleStatistics,
  bestTimeRacesCount,
  WINNERS_LIMIT
);

console.log(`FEMALE RESULTS - TOP (${femaleResults.length}):`);
console.log(femaleResults);
