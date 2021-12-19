import {calculateModuleFuel, calculateTotalFuel} from "."

test("calculateModuleFuel", function () {
  expect(calculateModuleFuel(12)).toBe(2)
  expect(calculateModuleFuel(14)).toBe(2)
  expect(calculateModuleFuel(1969)).toBe(654)
  expect(calculateModuleFuel(100756)).toBe(33583)
})

test("calculateTotalFuel", function () {
  expect(calculateTotalFuel([12, 14, 1969, 100756])).toBe(34241)
})
