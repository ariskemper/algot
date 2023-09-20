export function containsSomeValues(arr: number[], values: number[]): boolean {
  return values.some((elem) => arr.includes(elem))
}
