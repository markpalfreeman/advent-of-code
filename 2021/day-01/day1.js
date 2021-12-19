import input from "./input"
import {stringToArray} from "../../utils/parse"

export function parse(string) {
  return stringToArray(string, "\n", Number)
}

/**
 * Given a list of numbers, count the times a number (or a sliding window of X numbers) increases from one index to the next
 * @param {Array<Number>} list - array of integers
 * @param {Number} span - size/span of number sum to compare
 * @returns count integer
 */
export function countIncreases(list, span = 1) {
  let increases = 0

  for (let i = span; i < list.length; i++) {
    // with a span of X numbers, all the center indices are equal
    // just compare bookends
    if (list[i] > list[i - span]) {
      increases += 1
    }
  }

  return increases
}

const list = parse(input)

const result1 = countIncreases(list) // 1227
const result2 = countIncreases(list, 3) // 1254
