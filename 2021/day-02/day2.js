import input from "./input"
import {stringToArray} from "../../utils/parse"

export function parse(string) {
  return stringToArray(string)
}

const DIRECTIONS = {
  FORWARD: "forward",
  DOWN: "down",
  UP: "up",
}

/**
 * Calculate the final position and multiply x * y
 * @param {Array<string>} movements - array of instructions, formatted "{direction} {amount}"
 * @param {Boolean} withAim - whether to factor in additional "aim" calculation
 * @returns {Number}
 */
export function getPositionMultiple(movements, useAim = false) {
  let x = 0
  let y = 0
  let aim = 0

  movements.forEach((movement) => {
    const [direction, amount] = movement.split(" ")
    const measure = Number(amount)

    switch (direction) {
      case DIRECTIONS.FORWARD:
        x += measure

        if (useAim) {
          y += aim * measure
        }
        return
      case DIRECTIONS.DOWN:
        if (useAim) {
          aim += measure
        } else {
          y += measure
        }
        return
      case DIRECTIONS.UP:
        if (useAim) {
          aim -= measure
        } else {
          y -= measure
        }
        return
      default:
        return
    }
  })

  return x * y
}

const instructions = parse(input)

const result1 = getPositionMultiple(instructions) // 1813801
const result2 = getPositionMultiple(instructions, true) // 1960569556
