export function isInGivenRange(arr: number[], min: number, max: number): boolean {
  return arr.every((value) => value >= min && value <= max)
}
