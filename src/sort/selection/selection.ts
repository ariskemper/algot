import { compare, swap } from '../../utils'

/**
 * Time Complexity
 * - Best Case: O(n^2) - Even if the array is already sorted, the algorithm
 * still goes through all elements for each element in the array because it
 * doesn't know the array is sorted.
 *
 * - Average Case: O(n^2) - On average, the algorithm needs to perform
 * operations, as each element is potentially compared with every other element.
 *
 * - Worst Case: O(n^2) - Similar to the average case, the worst case also
 * involves n^2 operations. This is because, for every iteration, it finds the
 * minimum from the list ofn elements, then n - 1, and so on.
 *
 * Space Complexity: O(1) - It is an in-place sorting algorithm.
 * This means it does not require additional space proportional
 * to the input size (aside from a small constant amount of space).
 *
 * @param arr array which should be sorted
 * @returns sorted array
 */
export function selectionSort<T extends number | string>(arr: T[]): T[] {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i

    for(let j = i + 1; j < len; j++) {
      if (compare(arr[j], arr[minIndex]) < 0) {
        minIndex = j
      }
    }

    if (minIndex !== i) {
      arr = swap(arr, i, minIndex)
    }
  }

  return arr
}

export type SelectionSortFn = typeof selectionSort
