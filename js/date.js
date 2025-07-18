function formatDate(userDate) {
  // extend with 0 if needed
  function extend(date) {
    return date.length == 2 ? date : "0".concat(date);
  }

  // format from M/D/YYYY to YYYYMMDD
  const arr = userDate.split("/");
  return arr[2] + extend(arr[0]) + extend(arr[1]);
}

console.log(formatDate("12/31/2014"));