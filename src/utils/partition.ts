import { swap } from './swap'

export function partition<TElement>(arr: TElement[], low: number, high: number): number {
  const pivot = arr[high]
  let i = low

  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      arr = swap(arr, i, j)
      i++
    }
  }

  arr = swap(arr, i, high)
  return i
}
