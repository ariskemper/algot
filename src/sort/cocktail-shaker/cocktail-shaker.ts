import { compare, swap } from '../../utils'

/**
 * Cocktail Shaker Sort is a variation of the Bubble Sort algorithm. Like Bubble
 * Sort, Cocktail Shaker Sort repeatedly steps through the list, compares
 * adjacent elements, and swaps them if they are in the wrong order.
 *
 * Time Complexity
 * - Best Case: O(n) - This is when the list is allready sorted. The algorithm
 * will only need to traverse the list once in each direction without making any
 * swaps.
 *
 * - Average Case: O(n^2) - On average, it will need to traverse and compare
 * elements multiple times.
 *
 * - Worst Case: O(n^2) - Similar to Bubble Sort worst case scenario, where
 * the list is in reverse order.
 *
 * Space Complexity: O(1) - it sorts list in place and requires constant
 * amount of extra space regardless of the input size.
 *
 * @function cocktailShakerSort
 * @param arr unsorted array
 * @returns sorted array
 */
export function cocktailShakerSort<T extends string | number>(arr: T[]): T[] {
  let start = 0
  let end = arr.length - 1

  while (start < end) {
    arr = traverse(arr, start, end, 1)
    end--

    arr = traverse(arr, start, end, -1)
    start++
  }

  return arr
}

function traverse<T extends string | number>(
  arr: T[],
  start: number,
  end: number,
  direction: number
): T[] {
  if (direction === 1) {
    for (let i = start; i < end; i++) {
      if (compare(arr[i], arr[i + 1]) > 0) {
        arr = swap(arr, i, i + 1)
      }
    }
  } else if (direction === -1) {
    for (let i = end; i > start; i--) {
      if (compare(arr[i], arr[i - 1]) < 0) {
        arr = swap(arr, i, i - 1)
      }
    }
  }

  return arr
}

export type CocktailShakerSortFn = typeof cocktailShakerSort
