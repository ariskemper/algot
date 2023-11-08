/**
 * Radix Sort is a non-comparative sorting algorithm. Its time complexity
 * depends on the number of digits (or the length of the strings or keys)
 * used to represent the numbers. Let's denote:
 * - n: the number of elements in the array
 * - k: the maximum number of digits (or the length of the longest key)
 *
 * Time Complexity: O (n x k)
 * 1. In the case where k is not significantly larger than n (or is less than n),
 * Radix Sort can linearly sort numbers or strings, which can be faster than
 * comparison-based sorting algorithms.
 *
 * 2. However, if k is very large, the efficiency of Radix Sort can degrade,
 * making it less suitable for certain scenarios.
 *
 * Space Complexity: O (n x k)
 *
 * Remember, the exact efficiency and suitability of Radix Sort will
 * depend on the specific nature and distribution of the data being sorted.
 *
 * @param arr passed array of numbers to srt
 * @returns sorted array of numbers
 */
export function radixSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr

  const maxNum = Math.max(...arr.map((num) => Math.abs(num)))
  const maxLen = Math.floor(Math.log10(maxNum) + 1)

  let negatives = arr.filter((num) => num < 0)
  let positives = arr.filter((num) => num >= 0)

  for (let position = 0; position < maxLen; position++) {
    positives = countingSortForRadix(positives, position)
    negatives = countingSortForRadix(negatives, position)
  }

  return [...negatives.reverse(), ...positives]
}

function countingSortForRadix(arr: number[], position: number): number[] {
  const count: number[] = Array<number>(10).fill(0)

  arr.forEach((num) => {
    const digit = getDigit(num, position)
    count[digit]++
  })

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }

  const output = new Array<number>(arr.length)
  arr
    .slice()
    .reverse()
    .forEach((num) => {
      const digit = getDigit(num, position)
      output[--count[digit]] = num
    })

  return output
}

function getDigit(num: number, position: number): number {
  const str = Math.abs(num).toString()
  return str.length > position ? +str[str.length - 1 - position] : 0
}

export type RadixSortFn = typeof radixSort
