import { IntegerSortFn, SortFn } from '../sort'

export function testSort(fn: SortFn) {
  testSortStrings(fn)
  testSortIntegers(fn)
}

function testSortStrings(fn: SortFn): void {
  describe(`${fn.name}`, () => {
    it('It should sort strings', () => {
      const input = [
        'banana',
        'apple',
        'čoko',
        'cherry',
        'date',
        'elderberry',
        'fig'
      ]
      const result = fn(input)

      expect(result).toEqual([
        'apple',
        'banana',
        'cherry',
        'čoko',
        'date',
        'elderberry',
        'fig'
      ])
    })
  })
}

export function testSortIntegers(fn: IntegerSortFn): void {
  describe(`${fn.name}`, () => {
    test('It should sort integer numbers', () => {
      const input = [5, 2, 4, 6, 1, 3, 7, 10, 9, 8]
      const result = fn(input)

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
}

export function testSortSingleInteger(fn: IntegerSortFn): void {
  describe(`${fn.name}`, () => {
    test('It should return same array', () => {
      const input = [5]
      const result = fn(input)

      expect(result).toEqual([5])
    })
  })
}
