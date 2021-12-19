import input from "./input"
import {stringToArray} from "../../utils/parse"

export function parse(string) {
  return stringToArray(string)
}

const list = parse(input)

function getSumAtIndex(arr, charIndex) {
  return arr.reduce((acc, binary) => (acc += Number(binary[charIndex])), 0)
}

function sumBitCountsByIndex(arr) {
  // out of x items, use x/2 to delineate more 1/0s
  // create array of bit-length to sum each index (column)
  let sums = new Array(arr[0].length).fill(0)

  arr.forEach((binary) => {
    binary.split("").forEach((char, index) => {
      sums[index] += Number(char)
    })
  })

  return sums
}

// TODO: all this `inverse` stuff is gross; switch to dependency-injected functions
function mapBit(sum, length, inverse) {
  const condition = inverse ? sum < length : sum >= length
  return condition ? 1 : 0
}

function toCommonBinary(counts, length, inverse = false) {
  return counts.map((count) => mapBit(count, length / 2, inverse)).join("")
}

function toDecimal(binary) {
  return parseInt(binary, 2)
}

export function getPowerConsumption(binaries) {
  const counts = sumBitCountsByIndex(binaries)

  const gamma = toDecimal(toCommonBinary(counts, binaries.length, false))
  const epsilon = toDecimal(toCommonBinary(counts, binaries.length, true))

  return gamma * epsilon
}

const result1 = getPowerConsumption(list) // 3633500

// part 2 //

export function getBinary(binaries, inverse) {
  let binaryList = [...binaries]

  // iterate through indices and compare w/ total bit counts
  for (let char = 0; char < binaryList[0].length; char++) {
    const indexSum = getSumAtIndex(binaryList, char)
    const mostCommonDigit = mapBit(indexSum, binaryList.length / 2, inverse)

    // filter down array to strings whose bit matches the most common
    binaryList = binaryList.filter(
      (binary) => Number(binary[char]) === mostCommonDigit
    )

    if (binaryList.length === 1) {
      return binaryList[0]
    }
  }
}

export function getLifeSupportRating(binaries) {
  const oxygen = toDecimal(getBinary(binaries, false))
  const co2 = toDecimal(getBinary(binaries, true))

  return oxygen * co2
}

const result2 = getLifeSupportRating(list) // 4550283
