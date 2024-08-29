import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.times', () => {
  it('runs n times', () => {
    let i = 0
    highdash.times(6, _ => i++)
    assert.equal(i, 6)
  })

  it('returns the output of the predicate', () => {
    let i = 0
    let result = highdash.times(6, _ => i++)
    assert.deepEqual(result, [0, 1, 2, 3, 4, 5])
  })
})
