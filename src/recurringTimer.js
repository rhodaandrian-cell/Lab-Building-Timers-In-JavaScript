// Recurring timer: runs a callback at fixed intervals
function recurringTimer(callback, interval) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }
  const timerId = setInterval(callback, interval);
  return timerId; // Return ID so tests can clear the interval
}

module.exports = { recurringTimer };
