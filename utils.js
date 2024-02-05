export function getResults(statistics, bestTimeRacesCount, limit) {
  let results = statistics.filter(
    (item) => item.sortedRacesTime.length >= bestTimeRacesCount
  );

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

export function getGenderStatistics(statistics, gender) {
  return statistics.filter((item) => item.gender === gender);
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

export function getRunnersIdList(runners) {
  return Array.from(new Set(Object.keys(runners)));
}

export function getRaceRunnersIdList(race) {
  return Array.from(new Set(race.map((entry) => entry.bib)));
}

export function getRaceNewRunnersIdList(runnersIdList, raceRunnersIdList) {
  return raceRunnersIdList.filter((item) => !runnersIdList.includes(item));
}

export function checkNewRunners(runners, races) {
  const runnersIdList = getRunnersIdList(runners);

  races.forEach((race, index) => {
    const raceRunnersIdList = getRaceRunnersIdList(race);
    const raceNewRunnersIdList = getRaceNewRunnersIdList(
      runnersIdList,
      raceRunnersIdList
    );

    if (raceNewRunnersIdList.length) {
      throw new Error(
        `Race ${index + 1} new runners ids: [${raceNewRunnersIdList}].`
      );
    }
  });
}

export function convertStringTimeToMilliseconds(timeString) {
  const timeParts = timeString.split(":");
  const hours = parseInt(timeParts[0], 10) * 60 * 60 * 1000;
  const minutes = parseInt(timeParts[1], 10) * 60 * 1000;
  const seconds = parseInt(timeParts[2], 10) * 1000;

  return hours + minutes + seconds;
}

export function calculateTotalTime(timeStrings) {
  const totalMilliseconds = timeStrings.reduce((memo, timeString) => {
    return memo + convertStringTimeToMilliseconds(timeString);
  }, 0);

  const hours = Math.floor(totalMilliseconds / (60 * 60 * 1000));
  const minutes = Math.floor(
    (totalMilliseconds % (60 * 60 * 1000)) / (60 * 1000)
  );
  const seconds = Math.floor((totalMilliseconds % (60 * 1000)) / 1000);

  const formattedTime = [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(seconds).padStart(2, "0"),
  ].join(":");

  return formattedTime;
}
