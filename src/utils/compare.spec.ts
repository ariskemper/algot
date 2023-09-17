import { compare } from './compare'

describe('compare', () => {
  test('It should thrown an error', () => {
    expect(() => compare<number | string>(1, 'banana')).toThrow(
      new Error('Incompatible types for comparison')
    )
  })
})
