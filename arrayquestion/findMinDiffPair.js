function findMinDiffPair(arr) {
  if (arr.length < 2) return null;

  const sorted = arr.slice().sort((a, b) => a - b);
  let minDiff = Infinity;
  let pair = [null, null];

  for (let i = 1; i < sorted.length; i++) {
    const diff = Math.abs(sorted[i] - sorted[i - 1]);
    if (diff < minDiff) {
      minDiff = diff;
      pair = [sorted[i - 1], sorted[i]];
    }
  }

  return pair;
}
console.log(findMinDiffPair([4,9,1,7]));