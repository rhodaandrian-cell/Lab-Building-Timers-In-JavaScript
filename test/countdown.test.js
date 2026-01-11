// test/countdown.test.js

const { countdownTimer } = require("../src/countdown");

jest.useFakeTimers(); // Use fake timers so we can control time

describe("countdownTimer", () => {
  let logSpy;

  beforeEach(() => {
    logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    jest.clearAllTimers();
    logSpy.mockRestore();
  });

  test("should log remaining time at intervals and stop at 0", () => {
    const startTime = 3; // countdown from 3 seconds
    const interval = 1000; // 1 second

    countdownTimer(startTime, interval);

    // Fast-forward time
    jest.advanceTimersByTime(1000); // 1 second passed
    expect(logSpy).toHaveBeenCalledWith(3);

    jest.advanceTimersByTime(1000); // 2 seconds passed
    expect(logSpy).toHaveBeenCalledWith(2);

    jest.advanceTimersByTime(1000); // 3 seconds passed
    expect(logSpy).toHaveBeenCalledWith(1);

    jest.advanceTimersByTime(1000); // 4 seconds passed
    expect(logSpy).toHaveBeenCalledWith(0);

    jest.advanceTimersByTime(1000); // 5 seconds passed
    expect(logSpy).toHaveBeenCalledWith("Time's up!");

    // Total calls = 5
    expect(logSpy).toHaveBeenCalledTimes(5);
  });
});
