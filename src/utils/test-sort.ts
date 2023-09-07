import { SortFn } from '../sort'

export function testSort(fn: SortFn ) {
  describe(`${fn}`, () => {
    test('It should sort strings', () => {
      const input = ['banana', 'apple', 'čokolada', 'cherry', 'date', 'elderberry', 'fig']
      const result = fn(input)

      expect(result).toEqual([
        'apple',
        'banana',
        'cherry',
        'čokolada',
        'date',
        'elderberry',
        'fig'
      ])
    })

    test('It should sort numbers', () => {
      const input = [5, 2, 4, 6, 1, 3, 7, 10, 9, 8]
      const result = fn(input)

      expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
}
