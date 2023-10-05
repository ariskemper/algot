export function compare<SortT>(a: SortT, b: SortT): number {
  if (typeof a === 'string' && typeof b === 'string') {
    return a.localeCompare(b)
  } else if (typeof a === 'number' && typeof b === 'number') {
    return a - b
  }
  throw new Error('Incompatible types for comparison')
}
