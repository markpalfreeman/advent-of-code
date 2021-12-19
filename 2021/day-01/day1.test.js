import {countIncreases, parse} from "./day1"

const testInput = `
199
200
208
210
200
207
240
269
260
263
`

const list = parse(testInput)

test("countIncreases: one-by-one", function () {
  expect(countIncreases(list)).toBe(7)
  expect(countIncreases(list, 1)).toBe(7)
})

test("calculateTotalFuel: with length-3 sliding window", function () {
  expect(countIncreases(list, 3)).toBe(5)
})
