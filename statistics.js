import { convertStringTimeToMilliseconds, getRunnersIdList } from "./utils.js";

export function getGenderStatistics(statistics, gender) {
  return statistics
    .map((item) => ({ ...item }))
    .filter((item) => item.gender === gender);
}

export function getStatistics(runners, races) {
  const runnersIdList = getRunnersIdList(runners);

  const initialUnionRacesTime = runnersIdList.reduce((memo, id) => {
    memo[id] = Array(races.length);
    return memo;
  }, {});

  const unionRacesTime = races.reduce((memo, race, index) => {
    race.forEach((runner) => {
      memo[runner.bib][index] = runner.time;
    });

    return memo;
  }, initialUnionRacesTime);

  const sortedRacesTime = runnersIdList.reduce((memo, id) => {
    const bestTimeList = unionRacesTime[id].filter(
      (item) => item !== undefined
    );
    const bestTimeInMillisecondsList = bestTimeList.map(
      convertStringTimeToMilliseconds
    );

    bestTimeList.sort(
      (a, b) =>
        bestTimeInMillisecondsList[bestTimeList.indexOf(a)] -
        bestTimeInMillisecondsList[bestTimeList.indexOf(b)]
    );

    memo[id] = bestTimeList;

    return memo;
  }, {});

  const statistics = runnersIdList.reduce((memo, id) => {
    const { name, age, gender } = runners[id];

    memo.push({
      id,
      name,
      age,
      gender,
      unionRacesTime: unionRacesTime[id],
      sortedRacesTime: sortedRacesTime[id],
    });

    return memo;
  }, []);

  return statistics;
}
