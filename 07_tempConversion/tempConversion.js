const convertToCelsius = function (value) {
  return parseFloat(((value - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (value) {
  return parseFloat((((9 / 5) * value) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
