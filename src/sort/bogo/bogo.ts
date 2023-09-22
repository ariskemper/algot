import { compare } from '../../utils/compare'
import { swap } from '../../utils/swap'

export function bogoSort<T extends string | number>(arr: T[]): T[] {
  while (isNotSorted(arr)) {
    shuffle(arr)
  }
  return arr
}

function shuffle<T extends string | number>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    swap(arr, i, j)
  }
}

function isNotSorted<T extends string | number>(arr: T[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (compare(arr[i - 1], arr[i]) > 0) {
      return true
    }
  }
  return false
}

export type BogoSortFn = typeof bogoSort
