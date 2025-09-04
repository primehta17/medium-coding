function recordTemperatures(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (max < temps[i]) {
      max = temps[i];
    }
    if (min > temps[i]) {
      min = temps[i];
    }
  }
  return [min, max];
}
// console.log(recordTemperatures([32, 34, 28, 29, 31, 33]));

function secondrecordTemperatures(temps) {
  let max = temps[0],
    min = temps[0];
  let secMax = temps[0],
    secMin = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (max < temps[i]) {
      secMax = max;
      max = temps[i];
    } else if (max > temps[i] && secMax < temps[i]) {
      secMax = temps[i];
    }
    if (min > temps[i]) {
      secMin = min;
      min = temps[i];
    } else if (min < temps[i] && secMin > temps[i]) {
      secMin = temps[i];
    }
  }
  return [secMax, secMin];
}
console.log(secondrecordTemperatures([32, 34, 28, 29, 31, 33]));
