import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { compare } from './compare'

void void describe('compare', () => {
  void void it('should thrown an error', () => {
    assert.throws(() => compare<number | string>(1, 'banana'), new Error('Incompatible types for comparison'))
  })
})
