export function swap<TElement>(arr: TElement[], i: number, j: number): TElement[] {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
  return arr
}
