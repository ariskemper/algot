import { compare } from '../../utils/compare'
import { swap } from '../../utils/swap'

/**
 * Gnome Sort, also known as Stupid Sort, is a sorting algorithm that is
 * conceptually simple but inefficient for large datasets.
 *
 * Time Complexity
 * - Best Case: O(n) - If the list is already sorted, because it only needs
 * to traverse the list once.
 *
 * - Average Case: O(n^2)
 *
 * - Worst Case: O(n^2) - It happens when list is reversed.
 *
 * Space complexity: O(1) - it is in place sorting algorithm, which means
 * it requires only constact amount of extra space.
 *
 * It is mainly used for conceptual or educational purposes, due to inneficient
 * performance with large datasets.
 *
 * @param arr passed array of string or numbers
 * @returns return sorted array
 */
export function gnomeSort<TElement extends number | string>(arr: TElement[]): TElement[] {
  const l = arr.length
  let index = 0

  while (index < l) {
    if (index === 0 || compare(arr[index], arr[index - 1]) >= 0) {
      index = index + 1
    } else {
      swap(arr, index, index - 1)
      index = index - 1
    }
  }

  return arr
}

export type GnomeSortFn = typeof gnomeSort
