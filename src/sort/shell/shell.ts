import { compare, swap } from '../../utils'

export function shellSort<T extends number | string>(arr: T[]): T[] {
  const size = arr.length

  for (let gap = Math.floor(size / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < size; i += 1) {
      const temp = arr[i]
      let j
      for (j = i; j >= gap && compare(arr[j - gap], temp) > 0; j -= gap) {
        swap(arr, j, j - gap)
      }
      arr[j] = temp
    }
  }

  return arr
}

export type ShellSortFn = typeof shellSort
