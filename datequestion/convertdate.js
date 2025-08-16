function convertDateFormat(date) {
  const [day, month, year] = date.split("-");
  return `${month}-${day}-${year}`;
}
console.log(convertDateFormat("25-12-2025"));
