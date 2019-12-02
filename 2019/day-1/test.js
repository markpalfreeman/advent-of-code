import { calculateModuleFuel, calculateTotalFuel } from "./solution";

test("elves can calculate correct fuel per module", function() {
  expect(calculateModuleFuel(12)).toBe(2);
  expect(calculateModuleFuel(14)).toBe(2);
  expect(calculateModuleFuel(1969)).toBe(654);
  expect(calculateModuleFuel(100756)).toBe(33583);
});

test("elves can take off on their spaceship!", function() {
  expect(calculateTotalFuel([12, 14, 1969, 100756])).toBe(34241);
});
