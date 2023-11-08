import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { generateRandomizedIntegerArray } from '../benchmark/utils/array-generator'
import type { IntegerSortFn, SortFn } from '../sort'

export function testSort(fn: SortFn) {
  testSortStrings(fn)
  testSortSingleInteger(fn)
  testSortNegativeIntegers(fn)
  testSortRandomIntegers(fn)
}

function testSortStrings(fn: SortFn): void {
  void describe(`${fn.name}`, () => {
    void it('It should sort strings', () => {
      const result = fn(['fig', 'banana', 'apple', 'čoko', 'cherry', 'date', 'elderberry'])

      assert.deepStrictEqual(result, ['apple', 'banana', 'cherry', 'čoko', 'date', 'elderberry', 'fig'])
    })
  })
}

export function testSortNegativeIntegers(fn: IntegerSortFn): void {
  void describe(`${fn.name}`, () => {
    void it('should sort negative and positive integer numbers', () => {
      const input = [5, -2, -1, 4, 6, 1, -3, 7, 10, 9, 8]
      const result = fn(input)

      assert.deepStrictEqual(result, [-3, -2, -1, 1, 4, 5, 6, 7, 8, 9, 10])
    })
  })
}

export function testSortSingleInteger(fn: IntegerSortFn): void {
  void describe(`${fn.name}`, () => {
    void it('should return same array', () => {
      const input = [5]
      const result = fn(input)

      assert.deepStrictEqual(result, [5])
    })
  })
}

export function testSortRandomIntegers(fn: IntegerSortFn, n: number = 10): void {
  void describe(`${fn.name}`, () => {
    void it(`should sort array of random integer numbers and size ${n}`, () => {
      let input = generateRandomizedIntegerArray(n, {
        min: 0,
        max: n
      })
      input = input.sort((a, b) => a - b)
      const result = fn(input)
      assert.deepEqual(result, input)
    })
  })
}
