const capitalizefirstword = (str) => {
  return str
    .split(" ")
    .map((val) => val[0].toUpperCase() + val.slice(1))
    .join(" ");
};
console.log(capitalizefirstword("hello world!"));
