// Import your timer modules
const countdown = require('./src/countdown');
const reminder = require('./src/reminder');
const recurringTimer = require('./src/recurringTimer');

// -------- Countdown --------
console.log("Starting countdown of 5 seconds...");
countdown(5);

// -------- Reminder --------
console.log("Setting a reminder in 3 seconds...");
reminder("Time to stand up!", 3);

// -------- Recurring Timer --------
console.log("Starting recurring timer every 2 seconds (stops after 10s)...");
const id = recurringTimer(() => console.log("Ping!"), 2);

// Stop recurring timer after 10 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("Recurring timer stopped.");
}, 10000);
