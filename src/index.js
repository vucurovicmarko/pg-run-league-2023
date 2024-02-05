import runners from "./runners.js";
import races from "./races/index.js";
import { checkNewRunners } from "./utils.js";
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

// Male
const maleStatistics = getGenderStatistics(statistics, "M");
const maleBestRace = getResults(maleStatistics, 1, RESULTS_LIMIT);
const maleWinners = getResults(
  maleStatistics,
  bestTimeRacesCount,
  RESULTS_LIMIT
);
const maleResults = getResults(maleStatistics, bestTimeRacesCount);

// Female
const femaleStatistics = getGenderStatistics(statistics, "Ž");
const femaleBestRace = getResults(femaleStatistics, 1, RESULTS_LIMIT);
const femaleWinners = getResults(
  femaleStatistics,
  bestTimeRacesCount,
  RESULTS_LIMIT
);
const femaleResults = getResults(femaleStatistics, bestTimeRacesCount);

const resultsContainer = document.getElementById("results");

addSectionToDOM({
  title: `MALE BEST RACE - TOP (${maleBestRace.length})`,
  data: maleBestRace,
});

addSectionToDOM({
  title: `MALE WINNERS - TOP (${maleWinners.length}):`,
  data: maleWinners,
});

addSectionToDOM({
  title: `MALE RESULTS - TOP (${maleResults.length}):`,
  data: maleResults,
});

addSectionToDOM({
  title: `FEMALE BEST RACE - TOP (${femaleBestRace.length})`,
  data: femaleBestRace,
});

addSectionToDOM({
  title: `FEMALE WINNERS - TOP (${femaleWinners.length}):`,
  data: femaleWinners,
});

addSectionToDOM({
  title: `FEMALE RESULTS - TOP (${femaleResults.length}):`,
  data: femaleResults,
});

function createTitleElement(title) {
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  return titleElement;
}

function createDataElement(data) {
  const dataElement = document.createElement("pre");
  const printData = {};

  dataElement.textContent = JSON.stringify(data, null, 2);

  return dataElement;
}

function addSectionToDOM({ title, data }) {
  const sectionElement = document.createElement("section");

  sectionElement.appendChild(createTitleElement(title));
  sectionElement.appendChild(createDataElement(data));

  resultsContainer.appendChild(sectionElement);
}
