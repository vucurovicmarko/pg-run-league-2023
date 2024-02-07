import { getGenderStatistics, getStatistics } from "./statistics.js";
import { getResults } from "./results.js";

export function printResults(runners, races) {
  let bestTimeRacesCount = 4;

  // Display current results if an insufficient number of races have been held
  if (races.length < bestTimeRacesCount) {
    bestTimeRacesCount = races.length;
  }

  const statistics = getStatistics(runners, races);

  const results = getResults(statistics, bestTimeRacesCount);
  const bestTimeResults = getResults(statistics, 1);

  const maleStatistics = getGenderStatistics(statistics, "M");
  const maleResults = getResults(maleStatistics, bestTimeRacesCount);
  const maleBestTimeResults = getResults(maleStatistics, 1);

  const femaleStatistics = getGenderStatistics(statistics, "Ž");
  const femaleResults = getResults(femaleStatistics, bestTimeRacesCount);
  const femaleBestTimeResults = getResults(femaleStatistics, 1);

  appendSectionToDOM({
    sectionId: "everyone-results",
    title: `Everyone (best ${bestTimeRacesCount} races)`,
    data: results,
    bestTimeRacesCount,
    racesHeld: races.length,
  });

  appendSectionToDOM({
    sectionId: "male-results",
    title: `Male (best ${bestTimeRacesCount} races)`,
    data: maleResults,
    bestTimeRacesCount,
    racesHeld: races.length,
  });

  appendSectionToDOM({
    sectionId: "female-results",
    title: `Female (best ${bestTimeRacesCount} races)`,
    data: femaleResults,
    bestTimeRacesCount,
    racesHeld: races.length,
  });

  appendSectionToDOM({
    sectionId: "everyone-best-time-results",
    title: "Everyone best time",
    data: bestTimeResults,
    bestTimeRacesCount: 1,
    racesHeld: races.length,
  });

  appendSectionToDOM({
    sectionId: "male-best-time-results",
    title: "Male best time",
    data: maleBestTimeResults,
    bestTimeRacesCount: 1,
    racesHeld: races.length,
  });

  appendSectionToDOM({
    sectionId: "female-best-time-results",
    title: "Female best time",
    data: femaleBestTimeResults,
    bestTimeRacesCount: 1,
    racesHeld: races.length,
  });
}

function appendSectionToDOM({
  sectionId,
  title,
  data,
  bestTimeRacesCount,
  racesHeld,
}) {
  const resultsContainer = document.getElementById("results");

  const sectionElement = document.createElement("section");

  if (sectionId) {
    sectionElement.id = sectionId;
  }

  const titleElement = createTitleElement(title);
  const tableElement = document.createElement("table");

  const theadElement = document.createElement("thead");

  //   Headings
  const theadElementTr = document.createElement("tr");

  theadElementTr.appendChild(createThElement("Rang"));
  theadElementTr.appendChild(createThElement("Id"));
  theadElementTr.appendChild(createThElement("Name"));
  theadElementTr.appendChild(createThElement("Age"));
  theadElementTr.appendChild(createThElement("Gender"));

  for (let index = 1; index <= racesHeld; index++) {
    theadElementTr.appendChild(createThElement(`Race ${index}`));
  }

  theadElementTr.appendChild(
    createThElement(`Best times (${bestTimeRacesCount})`)
  );
  theadElementTr.appendChild(createThElement("Best times total"));

  theadElement.appendChild(theadElementTr);
  tableElement.appendChild(theadElement);

  const tbodyElement = document.createElement("tbody");

  console.log(data[1].unionRacesTime.length);

  data.forEach((item) => {
    const tbodyElementTr = document.createElement("tr");

    const rangTdElement = createTdElement(`${item.rang}.`);
    rangTdElement.id = "rang";

    tbodyElementTr.appendChild(rangTdElement);
    tbodyElementTr.appendChild(createTdElement(item.id));
    tbodyElementTr.appendChild(createTdElement(item.name));
    tbodyElementTr.appendChild(createTdElement(item.age));
    tbodyElementTr.appendChild(createTdElement(item.gender));

    for (let index = 0; index < item.unionRacesTime.length; index++) {
      tbodyElementTr.appendChild(
        createTdElement(item.unionRacesTime[index] || "-")
      );
    }

    tbodyElementTr.appendChild(createTdElement(item.bestTimes.join(", ")));

    const bestTimesTotalTdElement = createTdElement(item.bestTimesTotal);
    bestTimesTotalTdElement.id = "best-times-total";

    tbodyElementTr.appendChild(bestTimesTotalTdElement);

    tbodyElement.appendChild(tbodyElementTr);
    tableElement.appendChild(tbodyElement);
  });

  sectionElement.appendChild(titleElement);
  sectionElement.appendChild(tableElement);

  resultsContainer.appendChild(sectionElement);
}

function createTitleElement(title) {
  const titleElement = document.createElement("h2");
  titleElement.textContent = title;
  return titleElement;
}

function createThElement(heading) {
  const thElement = document.createElement("th");
  thElement.textContent = heading;
  return thElement;
}

function createTdElement(data) {
  const thElement = document.createElement("td");
  thElement.textContent = data;
  return thElement;
}
