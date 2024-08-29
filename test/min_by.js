import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.minBy', () => {
  it('finds the value that returns the smallest value after being "iterated"', () => {
    const result = highdash.minBy([1, 2, 3, 4], n => Math.pow(-2, n))
    assert.equal(result, 3)
  })
})
