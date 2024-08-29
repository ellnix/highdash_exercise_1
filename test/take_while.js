import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.takeWhile', () => {
  it('stops taking items once false is returned', () => {
    const result = highdash.takeWhile([2, 1, 6, 9], n => n % 2 == 0)
    assert.deepEqual(result, [2])
  })

  it('returns entire array if they all return true', () => {
    assert.deepEqual(highdash.takeWhile([2, 4, 6], n => n % 2 == 0), [2, 4, 6])
    assert.deepEqual(highdash.takeWhile(["hello", "world"], s => s.length > 3), ["hello", "world"])
  })
})
