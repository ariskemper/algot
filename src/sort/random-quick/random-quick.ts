import { compare, swap } from '../../utils'

/**
 * Random Quick Sort is divide-and-conquer algorithm that selects a 'pivot'
 * element and partitions the other elements into two groups: those less than
 * the pivot and those greater than the pivot. It then recursively applies the
 * same process to each group.
 *
 * Time Complexity
 * - Best Case: O(n log n)
 *
 * - Average Case: O(n log n) - This becomes more likely outcome with randomized
 *  pivot selection.
 *
 * - Worst Case: O(n^2) - Though still possible, it becomes increasingly unlikely
 * as the size of the array grows.
 *
 * Space Complexity: O(log n) - It is because the quick sort algorithm is a
 * recursive algorithm, and it needs to keep track of the recursion stack.
 *
 * Using a random pivot is a practical optimization to make quicksort work well
 * in real-world scenarios and to prevent performance degradation on specific
 * types of input (like sorted arrays).
 *
 * @param arr unsorted array of elements (may be strings or numbers)
 * @param left
 * @param right
 * @returns sorted array of elements (may be strings or numbers)
 */
export function randomQuickSort<TElement extends number | string>(
  arr: TElement[],
  left: number = 0,
  right: number = arr.length - 1
): TElement[] {
  if (left < right) {
    const pivotIndex = partition(arr, left, right)
    randomQuickSort(arr, left, pivotIndex - 1)
    randomQuickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

function partition<TElement extends number | string>(arr: TElement[], left: number, right: number): number {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left
  const pivot = arr[pivotIndex]
  swap(arr, right, pivotIndex)

  let partitionIndex = left
  arr.slice(left, right).forEach((item, index) => {
    if (compare(item, pivot) <= 0) {
      swap(arr, partitionIndex, left + index)
      partitionIndex++
    }
  })

  swap(arr, right, partitionIndex)
  return partitionIndex
}

export type RandomQuickSortFn = typeof randomQuickSort
