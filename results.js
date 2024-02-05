import {
  calculateTotalTime,
  convertStringTimeToMilliseconds,
} from "./utils.js";

export function getResults(statistics, bestTimeRacesCount, limit) {
  let results = statistics
    .map((item) => ({ ...item }))
    .filter((item) => item.sortedRacesTime.length >= bestTimeRacesCount);

  results.map((item) => {
    const bestTimes = [...item.sortedRacesTime].splice(0, bestTimeRacesCount);

    item.bestTimes = bestTimes;
    item.bestTimesTotal = calculateTotalTime(bestTimes);
  });

  results.sort(
    (a, b) =>
      convertStringTimeToMilliseconds(a.bestTimesTotal) -
      convertStringTimeToMilliseconds(b.bestTimesTotal)
  );

  results.map((item, index) => {
    item.rang = index + 1;
    return item;
  });

  if (limit) {
    results = results.slice(0, limit);
  }

  return results;
}
