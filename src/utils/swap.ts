export function swap<T>(arr: T[], i: number, j: number): T[] {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
  return arr
}
