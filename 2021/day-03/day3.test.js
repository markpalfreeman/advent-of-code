import {parse, getLifeSupportRating, getPowerConsumption} from "./day3"

const testInput = `
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
`

const list = parse(testInput)

test("getPowerConsumption", function () {
  expect(getPowerConsumption(list)).toBe(198)
})

test("getLifeSupportRating", function () {
  expect(getLifeSupportRating(list)).toBe(230)
})
