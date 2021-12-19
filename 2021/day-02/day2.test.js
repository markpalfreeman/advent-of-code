import {parse, getPositionMultiple} from "./day2"

const testInput = `
forward 5
down 5
forward 8
up 3
down 8
forward 2
`

const list = parse(testInput)

test("getPositionMultiple: standard movement", function () {
  expect(getPositionMultiple(list)).toBe(150)
})

test("getPositionMultiple: with aim calculation", function () {
  expect(getPositionMultiple(list, true)).toBe(900)
})
