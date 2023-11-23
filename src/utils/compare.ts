export function compare<TSort>(a: TSort, b: TSort): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b)
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }
  throw new Error('Incompatible types for comparison')
}
