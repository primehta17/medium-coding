function isSpOnGeCaSe(str) {
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      if (str[i] !== str[i].toUpperCase()) {
        return false;
      }
    } else {
      if (str[i] !== str[i].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

console.log(isSpOnGeCaSe("PrOgRaMiZ"));

console.log(isSpOnGeCaSe("pRoGrAmIz"));
console.log(isSpOnGeCaSe("HeLlO wOrLd"));
