import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { IntegerSortFn, SortFn } from '../sort'

export function testSort(fn: SortFn) {
  testSortStrings(fn)
  testSortSingleInteger(fn)
  testSortNegativeIntegers(fn)
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

      assert.deepStrictEqual(result, [
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
    it('should sort integer numbers', () => {
      const input = [5, 2, 4, 6, 1, 3, 7, 10, 9, 8]
      const result = fn(input)

      assert.deepStrictEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
}

export function testSortNegativeIntegers(fn: IntegerSortFn): void {
  describe(`${fn.name}`, () => {
    it('should sort negative and positive integer numbers', () => {
      const input = [5, -2, -1, 4, 6, 1, -3, 7, 10, 9, 8]
      const result = fn(input)

      assert.deepStrictEqual(result, [-3, -2, -1, 1, 4, 5, 6, 7, 8, 9, 10])
    })
  })
}

export function testSortSingleInteger(fn: IntegerSortFn): void {
  describe(`${fn.name}`, () => {
    it('should return same array', () => {
      const input = [5]
      const result = fn(input)

      assert.deepStrictEqual(result, [5])
    })
  })
}
