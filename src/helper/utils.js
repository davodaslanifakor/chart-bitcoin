/**
 * convert object to query string
 * @param {Object} obj - simple object {key:value,...}
 * @returns {string} - {key:value} => "key=value"
 */
export function objectToQueryString(obj = {}) {
  const str = [];
  for (const p in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, p)) {
      if (obj[p]) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
  }
  return str.length > 0 ? str.join("&") : "";
}
/**
 * get start date some days ago
 * @param {number} numberOfDaysToAdd
 * @returns
 */
export function getBaseStartDate(numberOfDay = 10) {
  var someDate = new Date();
  var result = someDate.setDate(someDate.getDate() - numberOfDay);
  return new Date(result).toISOString().slice(0, 10);
}
/**
 * get tody
 * @returns tody date by form 'YYYY-MM-DD'
 */
export function getToday() {
  return new Date().toISOString().slice(0, 10);
}
