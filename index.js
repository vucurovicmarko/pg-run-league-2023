import runners from "./runners.js";
import races from "./races/index.js";
import { checkNewRunners, logSeparation } from "./utils.js";
import { getGenderStatistics, getStatistics } from "./statistics.js";
import { getResults } from "./results.js";

// Throws error if new runners are introduced, runners import should be updated with newcomers
checkNewRunners(runners, races);

const RESULTS_LIMIT = 3;
let bestTimeRacesCount = 4;

// Display current results if an insufficient number of races have been held
if (races.length < bestTimeRacesCount) {
  bestTimeRacesCount = races.length;
}

const statistics = getStatistics(runners, races);

const maleStatistics = getGenderStatistics(statistics, "M");
const maleBestRace = getResults(maleStatistics, 1, RESULTS_LIMIT);
const maleWinners = getResults(
  maleStatistics,
  bestTimeRacesCount,
  RESULTS_LIMIT
);

console.log(`MALE BEST RACE - TOP (${maleBestRace.length})`);
console.log(maleBestRace);

logSeparation();

console.log(`MALE WINNERS - TOP (${maleWinners.length}):`);
console.log(maleWinners);

logSeparation();

const femaleStatistics = getGenderStatistics(statistics, "Ž");
const femaleBestRace = getResults(femaleStatistics, 1, RESULTS_LIMIT);
const femaleWinners = getResults(
  femaleStatistics,
  bestTimeRacesCount,
  RESULTS_LIMIT
);

console.log(`FEMALE BEST RACE - TOP (${femaleBestRace.length})`);
console.log(femaleBestRace);

logSeparation();

console.log(`FEMALE WINNERS - TOP (${femaleWinners.length}):`);
console.log(femaleWinners);
