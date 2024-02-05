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

export function logSeparation() {
  console.log("\n");
  console.log("----");
  console.log("\n");
}
