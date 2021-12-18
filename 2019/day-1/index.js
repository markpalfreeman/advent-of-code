import data from "./input"

export function calculateModuleFuel(mass) {
  return Math.floor(mass / 3) - 2
}

export function calculateTotalFuel(masses) {
  return masses.reduce((total, mass) => (total += calculateModuleFuel(mass)), 0)
}

console.log(calculateTotalFuel(data)) // 3231195
