// src/countdown.js

function countdownTimer(seconds, interval = 1000) {
  let remaining = seconds;

  const timerId = setInterval(() => {
    console.log(remaining);
    remaining--;

    if (remaining < 0) {
      console.log("Time's up!");
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
