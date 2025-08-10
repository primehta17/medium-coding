function quadric(x, a, b, c) {
  return a * x * x + b * x + c;
}

function findVertex(a, b, c) {
  let h = -b / (2 * a);
  let k = quadric(h, a, b, c);
  //   return { h, k };
  return [h, k];
}
console.log(findVertex(1, -3, 2));
