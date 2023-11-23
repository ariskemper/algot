import { compare, swap } from '../../utils'

/**
 * Bitonic Sort or bitonic merge sort algorithm is a parallel algorithm for sorting
 * . It is also used as construction method for building a sorting network.
 * The algorithm was devised by Ken Batcher. The resulting sorting networks
 * consist of O(n log^2 (n)) comparators and have a delay of O(log^2 (n)),
 * where n is the number of items to be sorted.
 *
 * Time Complexity: O(n log^2 (n)) - Butonic sort involves constructing
 * bitonic sequences and repeatedly splitting them and rearranging them
 * to form new bitonic sequences. It involves log n stages, and at each
 * stage, there are O(n) comparisons.
 *
 * Space Complexity: O(1) - Bitonic sort is in-place sorting algorithm,
 * meaning it doesn't require extra space or auxiliary arrays for sorting the
 * input.
 *
 * Bitonic sort is not commonly used for general-purpose sorting due to its
 * non-competitive time complexity compared to faster, simpler algorithms like
 * QuickSort or MergeSort. However, it has its uses in parallel processing
 * systems because of its ability to sort in a parallel manner.
 *
 * @param arr unsorted array should be size of power of 2 - (1, 2, 4, 8, 16, ...)
 * @param ascending direction of sort
 * @returns sorted array
 */
export function bitonicSort<TElement extends string | number>(arr: TElement[], ascending: boolean = true): TElement[] {
  const n = arr.length
  if (n <= 1) return arr

  let k = 1
  while (k < n) {
    k = k * 2
  }

  if (n !== k) {
    throw new Error('Array size must be a power of 2')
  }

  bitonicSortRec(arr, 0, n, ascending)

  return arr
}

function compareAndSwap<TElement extends string | number>(arr: TElement[], i: number, j: number, ascending: boolean) {
  if (ascending ? compare(arr[i], arr[j]) > 0 : compare(arr[i], arr[j]) < 0) {
    arr = swap(arr, i, j)
  }
  return arr
}

function bitonicMerge<TElement extends string | number>(arr: TElement[], low: number, cnt: number, ascending: boolean) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2)
    for (let i = low; i < low + k; i++) {
      compareAndSwap(arr, i, i + k, ascending)
    }
    bitonicMerge(arr, low, k, ascending)
    bitonicMerge(arr, low + k, k, ascending)
  }
}

function bitonicSortRec<TElement extends string | number>(
  arr: TElement[],
  low: number,
  cnt: number,
  ascending: boolean
) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2)
    bitonicSortRec(arr, low, k, !ascending)
    bitonicSortRec(arr, low + k, k, ascending)
    bitonicMerge(arr, low, cnt, ascending)
  }
}

export type BitonicSortFn = typeof bitonicSort
