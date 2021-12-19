/**
 * Convert a string to an array
 * @param {String} string - given string
 * @param {String|RegExp} [delimiter="\n"] - what to "split" by (defaults to newline)
 * @param {Function} [formatter] - applies to each array item
 * @returns
 */
export function stringToArray(string, delimiter = "\n", formatter) {
  const delimited = string.trim().split(delimiter)

  return formatter ? delimited.map(formatter) : delimited
}
