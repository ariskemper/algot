import { compare } from '../../utils/compare'
import { swap } from '../../utils/swap'

/**
 * Bogo Sort is highly inefficient algorithm and sometimes referred as
 * "stupid sort" based on generate and test paradigm. Function shuffle repeadetly
 * generates random permutation of it's input until it finds one that is sorted.
 * Bogo Sort is not suitable for real-world applications.
 *
 * Time Complexity:
 * Average Case: O ((n +1)!)
 * Worst Case: Is unbounded since there is no guarantee it will complete
 *
 * @param arr unsorted array
 * @returns sorted array
 */
export function bogoSort<TElement extends string | number>(arr: TElement[]): TElement[] {
  while (isNotSorted(arr)) {
    shuffle(arr)
  }
  return arr
}

function shuffle<TElement extends string | number>(arr: TElement[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    swap(arr, i, j)
  }
}

function isNotSorted<TElement extends string | number>(arr: TElement[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (compare(arr[i - 1], arr[i]) > 0) {
      return true
    }
  }
  return false
}

export type BogoSortFn = typeof bogoSort
