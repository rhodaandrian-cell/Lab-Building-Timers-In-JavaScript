// test/recurringTimer.test.js

const { recurringTimer } = require("../src/recurringTimer");

jest.useFakeTimers();

describe("recurringTimer", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllTimers();
    logSpy.mockRestore();
  });

  test("should log the message at the specified interval", () => {
    const message = "Recurring message";
    const interval = 2000; // 2 seconds

    const timerId = recurringTimer(() => console.log(message), interval);

    // Fast-forward time by 6 seconds (3 intervals)
    jest.advanceTimersByTime(6000);

    // Verify message was logged 3 times
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith(message);

    // Stop the recurring timer
    clearInterval(timerId);
  });

  test("should stop logging when clearInterval is called", () => {
    const message = "Stop this message";
    const interval = 1000; // 1 second

    const timerId = recurringTimer(() => console.log(message), interval);

    // Simulate 2 intervals
    jest.advanceTimersByTime(2000);

    // Stop the timer
    clearInterval(timerId);

    // Advance more time to check that no more logs happen
    jest.advanceTimersByTime(3000);

    // Message should only have been logged 2 times
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenCalledWith(message);
  });
});
