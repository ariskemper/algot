import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { isInGivenRange } from './range'

describe('isInGivenRange function', () => {
  it('should verify if all elements in the array are within the given range', () => {
    const arr = [2, 4, 6, 8]
    const min = 1
    const max = 10

    assert.equal(isInGivenRange(arr, min, max), true)

    const arrOutOfRange = [2, 4, 6, 12]
    assert.equal(isInGivenRange(arrOutOfRange, min, max), false)
  })
})
