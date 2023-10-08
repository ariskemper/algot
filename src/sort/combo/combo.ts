import { compare, swap } from '../../utils'

/**
 * Combo Sort is a relatively straightforward sorting algorithm that improves
 * upon the traditional Bubble Sort by utilizing a gap during comparisons and
 * swaps. The algorithm was devised by Włodzimierz Dobosiewicz and Artur Borowy
 * in 1980 and its design aims to eliminate turtles, which are small values at
 * the end of the list that slow down the sorting process in Bubble Sort.
 *
 * Time Complexity:
 * - Best Case: O (n log n) - This happens in scenarios where the input data
 * is partially sorted. Combo Sort tends to have a slightly better best-case time
 * complexity compared to Bubble Sort due to the use of a gap that can be larger
 * than 1, thereby reducing the number of overall comparisons and swaps.
 *
 * - Average Case: O (n^2/2^p), where p is the number of increments The time
 * complexity in the average case is hard to determine without specific details
 * about the distribution of input data and is typically approximated because it
 * depends on the 'shrink factor' used to decrement the gap and how the data is
 * arranged. The factor of 2^p in the denominator represents the number of
 * passes, which is influenced by how quickly the gap size reduces.
 *
 * - Worst Case: O (n^2), This is often considered to be quadratic O (n^2)
 * specially when dealing with reverse-ordered data or data with many duplicates.
 * However, it's essential to note that Combo Sort is generally slightly more
 * efficient than a traditional Bubble Sort due to its ability to move items
 * quickly to their correct position in the early stages when the gap is large.
 *
 * Space Complexity: O(1)
 *
 * @function comboSort
 * @param arr unsorted array of strings or numbers
 * @returns sorted array
 */
export function comboSort<T extends string | number>(arr: T[]): T[] {
  let gap = arr.length
  if (gap <= 1) return arr
  let swapped = false

  while (gap > 1 || swapped) {
    gap = updateGap(gap)
    swapped = false

    for (let i = 0; i + gap < arr.length; i++) {
      if (compare(arr[i], arr[i + gap]) > 0) {
        swap(arr, i, i + gap)
        swapped = true
      }
    }
  }
  return arr
}

function updateGap(gap: number): number {
  gap = Math.floor(gap / 1.3)
  if (gap === 9 || gap === 10) {
    gap = 11
  }
  return Math.max(1, gap)
}

export type ComboSortFn = typeof comboSort
