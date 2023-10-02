import { compare } from '../../utils'

/**
 * Cycle Sort Algorithm is an in-place and unstable sorting algorithm. It's main
 * purpose is not just to sort the data, but to minimize the number of writes
 * when used in applications with flash memory, where write operatioms are costly,
 * because they reduce lifespan of the memory.
 * It is based on the idea that the permutation to be sorted can be factored
 * into cycles, which can individually be rotated to give a sorted result.
 *
 * Time Complexity
 * - Best Case: O(N^2)
 * - Average Case: O(N^2)
 * - Worst Case: O(N^2)
 *
 * Cycle Sort always takes a fixed number of comparisons based on the number of
 * elements (n) in the dataset. The quadratic time complexity arises due to the
 * nested nature of its loops.
 *
 * Space Complexity: O(1)
 * Cycle Sort is an in-place sorting algorithm, meaning it doesn't require any
 * additional space (apart from a constant amount of extra space for variables)
 * to sort the input array. The primary operations in the algorithm involve
 * moving elements within the array itself without the need for additional
 * auxiliary storage.
 *
 * @function cycleSort
 * @param arr unsorted array
 * @returns sorted array
 */
export function cycleSort<T extends number | string>(arr: T[]): T[] {
  const len = arr.length

  if (len === 0) return arr

  for (let cur = 0; cur <= len - 1; cur++) {
    let item = arr[cur]
    let pos = cur
    for (let i = cur + 1; i < len; i++) {
      if (compare(item, arr[i]) > 0) pos++
    }

    if (pos === cur) continue

    while (item === arr[pos]) {
      pos++
    }
    ;[arr[pos], item] = [item, arr[pos]]

    while (pos !== cur) {
      pos = cur

      for (let j = cur + 1; j < len; j++) {
        if (compare(item, arr[j]) > 0) pos++
      }

      while (item === arr[pos]) {
        pos++
      }
      ;[arr[pos], item] = [item, arr[pos]]
    }
  }

  return arr
}

export type CycleSortFn = typeof cycleSort
