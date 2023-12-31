import { compare, swap } from '../../utils'

/**
 *
 * Heap Sort builds a binary heap data structure from the array and then
 * repeatedly extracts the maximum element from the heap until it is empty,
 * thereby obtaining a sorted array.
 *
 * Time Complexity
 * - The time complexity of the heap sort algorithm is O(n log n), where n is the
 * number of elements in array. This complecity is applicable for the best,
 * average, and wors case scenarios.
 *
 * - Bulding initial Heap: O(n)
 * - Heapify process during extraction: O(log n)
 * - Repeated heapify process for each element: O(n)
 *
 * Combining those, we get total time complexity of O(n log n)
 *
 * Space complexity: O(1)
 *
 * @function heapSort
 * @param arr array which should be sorted
 * @param low start index of heap
 * @param n number of elements in heap
 * @returns sorted array
 */
export function heapSort<TElement extends number | string>(
  arr: TElement[],
  low: number = 0,
  n: number = arr.length
): TElement[] {
  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= low; i--) {
    heapify(arr, n, i)
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > low; i--) {
    // Move current root to end
    arr = swap(arr, low, i)

    // Call max heapify on the reduced heap
    heapify(arr, i, low)
  }

  return arr
}

function heapify<TElement extends number | string>(arr: TElement[], n: number, i: number) {
  let largest = i // Initialize largest as root
  const l = 2 * i + 1 // left = 2*i + 1
  const r = 2 * i + 2 // right = 2*i + 2

  // If left child is larger than root
  if (l < n && compare(arr[l], arr[largest]) > 0) {
    largest = l
  }

  // If right child is larger than largest so far
  if (r < n && compare(arr[r], arr[largest]) > 0) {
    largest = r
  }

  // If largest is not root
  if (largest !== i) {
    arr = swap(arr, i, largest)

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest)
  }
}

export type HeapSortFn = typeof heapSort
