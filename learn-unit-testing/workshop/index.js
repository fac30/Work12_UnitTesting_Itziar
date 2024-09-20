// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(str) {
  const data = str.split("&");
  const dataObject = {};

  for (content of data) {
    const paramsArray = content.split("=");
    const key = paramsArray[0];
    const value = paramsArray[1];

    dataObject[key] = value;
  }
  return dataObject;
}

function isLeapYear(year) {
  if (typeof year !== "number") {
    return `${year} is not a number`;
  } else if (year < 0) {
    return "Year can't be negative";
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
