function calculateWashingTime(times, days) {
  const totalUnits = times * days;

  const totalSeconds = totalUnits * 21;

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes} minutes and ${seconds} seconds`;
}

console.log(calculateWashingTime(8, 30));
console.log(calculateWashingTime(10, 15));
