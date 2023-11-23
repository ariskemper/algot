import { compare, swap } from '../../utils'

/**
 * Bubble Sort compares adjacent elements and swaps them if they are in the
 * wrong order. This process is repeated until the array is sorted.
 *
 * Time Complexity
 * - Worst Case: O(n^2) -This occurs when the input array is in reverse order.
 * In each iteration of the outer loop, the inner loop will compare and
 * potentially swap each of the remaining unsorted elements. This leads to
 * approximately n(n-1)/2 operations, which is the order of O(n^2).
 *
 * - Average Case: O(n^2) - On average, bubble sort will still need to perform a
 * quadratic number of operations. This is because, on average, it will still
 * need to perform roughly half of the comparisons and swaps as in the worst-case
 * scenario for any given random array.
 *
 * - Best Case: O(n) - This occurs when the input array is already sorted.
 * In the best case (when an optimized version of bubble sort is used that
 * terminates early if no swaps were made in a pass), only n-1 comparisons will
 * be made and no swaps. Hence the best case time complexity is linear.
 *
 * Space complexity: O(1)
 *
 * Bubble sort is an in-place sorting algorithm, which means it uses a constant
 * amount of extra memory (for variables like loop counters, etc.), regardless
 * of the size of the input.
 *
 * @param arr array which should be sorted
 * @returns sorted array
 */
export function bubbleSort<TElement extends string | number>(arr: TElement[]): TElement[] {
  let len = arr.length
  let swapped: boolean

  do {
    swapped = false
    for (let i = 0; i < len - 1; i++) {
      if (compare(arr[i], arr[i + 1]) > 0) {
        arr = swap(arr, i, i + 1)
        swapped = true
      }
    }
    len--
  } while (swapped)

  return arr
}

export type BubbleSortFn = typeof bubbleSort
