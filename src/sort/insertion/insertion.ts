import { compare } from '../../utils'

/**
 * Builds a sorted array one element at a time by repeatedly picking the next
 * element and inserting it into its correct position in the sorted portion of
 * the array.
 *
 * Time Complexity
 * - Best Case: O(n) - This is the scenario where the input array is already
 * sorted.The algorithm only needs to go through the array once, hence linear
 * time complexity.
 *
 * - Average Case: O(n^2) - On average, the time complexity tends to be quadratic,
 * because each element in the array is compared with each other element in the
 * subarray to its left.
 *
 * - Worst Case: O(n^2) - This happens when the input array is sorted in reverse
 * order. Each insertion can potentially take n comparisons and swaps.
 *
 * Space Complexity: O(1) - It is an in-place sorting algorithm and does not
 * require additional space proportional to the input size.
 *
 * @param arr unsorted array
 * @returns sorted array
 */
export function insertionSort<T extends number | string>(arr: T[]): T[] {
  const len = arr.length

  for (let i = 1; i < len; i++) {
    const key = arr[i]
    let j = i - 1

    // Move elements of arr[0..i-1] that are greater than key
    // to one position ahead of their current position
    while (j >= 0 && compare(arr[j], key) > 0) {
      arr[j + 1] = arr[j]
      j = j - 1
    }

    arr[j + 1] = key
  }

  return arr
}

export type InsertionSortFn = typeof insertionSort
