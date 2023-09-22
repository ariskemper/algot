import { compare } from '../../utils/compare'
import { swap } from '../../utils/swap'

export function gnomeSort<T extends number | string>(arr: T[]): T[] {
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
