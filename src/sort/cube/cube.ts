/**
 * Cube Sort is a relatively simple sorting algorithm that works well
 * for a limited range of input values, such as integers or small ranges
 * of numbers. It's not commonly used in practice due to its limited
 * efficiency for larger datasets.
 *
 * Time Complexity
 * The time complexity of the Cube Sort algorithm is O(n + k),
 * where "n" is the number of elements in the input array,
 * and "k" is the range of values (i.e., the difference between the
 * maximum and minimum values in the array).
 *
 * Best Case: Ω(n)
 * Average Case: O(n log(n))
 * Worst Case: O(n log(n))
 *
 * The overall time complexity is dominated by the counting phase because,
 * in practice, "k" is often much smaller than "n." Therefore, the Cube Sort
 * algorithm is typically considered to have a time complexity of O(n)
 * in most practical cases.
 *
 * Space complexity: O(n)
 *
 * @function cubeeSort
 * @param arr unsorted array
 * @returns sorted array
 */
export function cubeSort(arr: number[]): number[] {
  const n = arr.length

  if (n <= 1) return [...arr]

  const { minValue, maxValue } = {
    minValue: Math.min(...arr),
    maxValue: Math.max(...arr)
  }

  const range = maxValue - minValue + 1

  // Initialize the count array with zeros
  const count: number[] = new Array(range).fill(0)

  // Count the occurrences of each element
  for (let i = 0; i < n; i++) {
    const value = arr[i]
    count[value - minValue]++
  }

  // Create the sorted result array
  const result: number[] = new Array(n)
  let resultIndex = 0

  for (let i = 0; i < range; i++) {
    const value = i + minValue
    while (count[i] > 0) {
      result[resultIndex] = value
      resultIndex++
      count[i]--
    }
  }

  return result
}

export type CubeSortFn = typeof cubeSort
