import { compare } from '../../utils'

/**
 * Time Complexity
 * - Best Case: O(n log n) - Even in the best case, the array needs to be split
 * down and merged back, requiring n log n operations.
 *
 * - Average Case: O(n log n) - This is the standard time complexity for merge
 * sort, as each split divides the array in half.
 *
 * - Worst Case: O(n log n) - The worst case time complexity remains the same,
 * as the divide and merge operations are consistent regardless of the
 * input distribution.
 *
 * Space Complexity: O(n) - This is because merge sort requires additional space
 * to store the temporary arrays used during the merge step. The space is used
 * to hold the two halves that are being merged, and this space adds up to n for
 * all levels of the recursion.
 *
 * @param arr unsorted array
 * @returns sorted array
 */
export function mergeSort<T extends number | string>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge<T extends number | string>(left: T[], right: T[]): T[] {
  const resultArray: T[] = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) <= 0) {
      resultArray.push(left[i])
      i++
    } else {
      resultArray.push(right[j])
      j++
    }
  }

  return resultArray.concat(left.slice(i)).concat(right.slice(j))
}

export type MergeSortFn = typeof mergeSort
