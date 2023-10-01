import assert from 'node:assert/strict'
import { describe, it } from 'node:test'

import { compare } from './compare'

describe('compare', () => {
  it('It should thrown an error', () => {
    assert.throws(() => compare<number | string>(1, 'banana'), new Error('Incompatible types for comparison'))
  })
})
