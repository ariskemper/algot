import { compare, swap } from '../../utils'

/**
 * Shell Sort A generalization of insertion sort that sorts elements at specific
 * intervals, gradually reducing the interval to perform a final insertion sort.
 *
 *  Time Complexity
 * - Best Case: O(n log^2 n) - The best known gap sequence, derived empirically
 * - Worst Case: O(n^2) - The worst known gap sequence, derived empirically
 *
 * The time complexity of the Shell Sort algorithm is somewhat complex to
 * determine because it depends on the gap sequence chosen
 *
 * Space Complexity: O(1) - because it sorts the array in place, using only a
 * constant amount of additional space.
 *
 * In practice, Shell Sort tends to perform well for medium-sized arrays and is
 * commonly used as a sub-routine in more advanced sorting algorithms because
 * of its efficiency on smaller data sets or on nearly sorted arrays.
 *
 * @param arr unsorted array
 * @returns sorted array
 */
export function shellSort<TElement extends number | string>(arr: TElement[]): TElement[] {
  const size = arr.length

  for (let gap = Math.floor(size / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < size; i += 1) {
      const temp = arr[i]
      let j
      for (j = i; j >= gap && compare(arr[j - gap], temp) > 0; j -= gap) {
        swap(arr, j, j - gap)
      }
      arr[j] = temp
    }
  }

  return arr
}

export type ShellSortFn = typeof shellSort
