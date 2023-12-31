import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import {
  generateDescSortedIntegerArray,
  generateNearlySortedIntegerArray,
  generateRandomizedIntegerArray,
  generateSortedIntegerArray,
  generateWithUniqueValuesIntegerArray
} from './array-generator'
import { containsSomeValues } from './contain'
import { isInGivenRange } from './range'
void describe('generateRandomizedIntegerArray', () => {
  void it('should generate array of given size', () => {
    const arr = generateRandomizedIntegerArray(10, { min: 1, max: 10 })

    assert.equal(arr.length, 10)
  })

  void it('should generate array with values in given range', () => {
    const min = 1
    const max = 10
    const arr = generateRandomizedIntegerArray(10, { min, max })

    assert.equal(isInGivenRange(arr, min, max), true)
  })

  void it('should throw an error for negative min range', () => {
    assert.throws(
      () => generateRandomizedIntegerArray(10, { min: 11, max: 10 }),
      new Error('Min value cannot be greater than Max value')
    )
  })
})

void describe('generateSortedIntegerArray', () => {
  void it('should generate a sorted array of a given size', () => {
    const size = 5
    const expectedResult = [0, 1, 2, 3, 4]

    assert.deepStrictEqual(generateSortedIntegerArray(size), expectedResult)
  })

  void it('should generate a sorted array of a given size with start and step', () => {
    const size = 7
    const expectedResult = [2, 4, 6, 8, 10, 12, 14]

    assert.deepStrictEqual(generateSortedIntegerArray(size, 2, 2), expectedResult)
  })

  void it('should generate an empty array when size is 0', () => {
    assert.deepStrictEqual(generateSortedIntegerArray(0), [])
  })

  void it('should throw an error for negative size', () => {
    assert.throws(() => generateSortedIntegerArray(-1), new Error('Size must be a non-negative integer'))
  })
})

void describe('generateDescSortedArray', () => {
  void it('should generate a sorted array of a given size in descending order', () => {
    const size = 5
    const expectedResult = [4, 3, 2, 1, 0]

    assert.deepStrictEqual(generateDescSortedIntegerArray(size), expectedResult)
  })
})

void describe('generateArrayWithUniqueValues', () => {
  void it('should generate an array containing only unique values', () => {
    const size = 10
    const uniqueValues = [4, 3, 2, 1, 0]

    const unique = generateWithUniqueValuesIntegerArray(size, uniqueValues)

    assert.equal(containsSomeValues(unique, uniqueValues), true)
  })

  void it('should throw an error for negative size', () => {
    assert.throws(
      () => generateWithUniqueValuesIntegerArray(-1, [1, 2, 3, 4]),
      new Error('Size must be a non-negative integer')
    )
  })

  void it('should throw an error, if unique value array is empty', () => {
    assert.throws(() => generateWithUniqueValuesIntegerArray(2, []), new Error('Unique values array must not be empty'))
  })
})

void describe('generateDescSortedArray', () => {
  void it('should generate a sorted array of a given size in descending order', () => {
    const size = 5
    const expectedResult = [4, 3, 2, 1, 0]

    assert.deepStrictEqual(generateDescSortedIntegerArray(size), expectedResult)
  })
})

void describe('generateNearlySortedArray', () => {
  void it('should generate of specified size', () => {
    const size = 10
    const swpCnt = 2
    const result = generateNearlySortedIntegerArray(size, swpCnt)

    assert.equal(result.length, size)
  })

  void it('should perform the specified number of swaps', () => {
    const size = 100
    const swpCnt = 20

    const originalArray = Array.from({ length: size }, (_, index) => index)
    const result = generateNearlySortedIntegerArray(size, swpCnt)

    let actualSwapCount = 0
    for (let i = 1; i < result.length; i++) {
      if (originalArray[i] < result[i - 1]) {
        actualSwapCount++
      }
    }

    assert.equal(actualSwapCount <= swpCnt, true)
  })

  void it('should throw an error for negative size or invalid swap count', () => {
    assert.throws(
      () => generateNearlySortedIntegerArray(-1, 10),
      new Error('Size and swap count must be non-negative integers')
    )
    assert.throws(
      () => generateNearlySortedIntegerArray(100, -10),
      new Error('Size and swap count must be non-negative integers')
    )
  })
})
