// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const formatNumber = (number) => {
  let str = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str;
}

export {formatNumber}