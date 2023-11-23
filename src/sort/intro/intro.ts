import { partition } from '../../utils/partition'
import { heapSort } from '../heap/heap'
import { insertionSort } from '../insertion/insertion'

/**
 * IntroSort, short for "Introspective Sort", is a hybrid sorting algorithm that
 * provides both fast average performance and (worst-case) optimal performance.
 * It begins with quicksort, switches to heapsort when the recursion depth exceeds
 * a level based on (the logarithm of) the number of elements being sorted,
 * and switches to insertion sort when the partition size is below some threshold.
 *
 * Time Complexity
 * - Best Case: O(n log n)
 * - Average Case: O(n log n)
 * - Worst Case: O(n log n)
 *
 * The guarantee of O(nlogn) worst-case performance comes from the heapsort,
 * which takes over when quicksort's recursion goes too deep. The insertion sort
 * provides optimization for small array segments, making the sort faster for
 * small partitions.
 *
 * Space Complexity: O(log n)
 *
 * It's worth noting that while IntroSort is designed to have the best of three
 * algorithms (quicksort, heapsort, and insertion sort).
 *
 * @function introSort
 * @param arr unsorted array
 * @returns sorted array
 */
export function introSort<TElement extends string | number>(arr: TElement[]): TElement[] {
  const copyArr = [...arr]
  sort(copyArr)
  return copyArr
}

function sort<TElement extends string | number>(
  arr: TElement[],
  low: number = 0,
  high: number = arr.length - 1,
  depthLimit = 2 * Math.floor(Math.log2(arr.length))
) {
  if (high - low < 16) {
    insertionSort(arr, low, high)
  } else if (depthLimit === 0) {
    heapSort(arr, low, high + 1)
  } else {
    const pivot = partition(arr, low, high)
    sort(arr, low, pivot - 1, depthLimit - 1)
    sort(arr, pivot + 1, high, depthLimit - 1)
  }
}

export type IntroSortFn = typeof introSort
