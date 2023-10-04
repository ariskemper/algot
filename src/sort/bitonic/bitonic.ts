import { compare, swap } from '../../utils'

export function bitonicSort<SortT>(arr: SortT[], ascending: boolean = true): SortT[] {
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

function compareAndSwap<SortT>(arr: SortT[], i: number, j: number, ascending: boolean) {
  if (ascending ? compare(arr[i], arr[j]) > 0 : compare(arr[i], arr[j]) < 0) {
    arr = swap(arr, i, j)
  }
  return arr
}

function bitonicMerge<SortT>(arr: SortT[], low: number, cnt: number, ascending: boolean) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2)
    for (let i = low; i < low + k; i++) {
      compareAndSwap(arr, i, i + k, ascending)
    }
    bitonicMerge(arr, low, k, ascending)
    bitonicMerge(arr, low + k, k, ascending)
  }
}

function bitonicSortRec<SortT>(arr: SortT[], low: number, cnt: number, ascending: boolean) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2)
    bitonicSortRec(arr, low, k, !ascending)
    bitonicSortRec(arr, low + k, k, ascending)
    bitonicMerge(arr, low, cnt, ascending)
  }
}

export type BitonicSortFn = typeof bitonicSort
