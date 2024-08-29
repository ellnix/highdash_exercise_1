import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.sum', () => {
  it('returns 0 when passed null or undefined', () => {
    assert.equal(highdash.sum(null), 0)
    assert.equal(highdash.sum(undefined), 0)
  })

  it('returns 0 when passed empty array', () => {
    assert.equal(highdash.sum([]), 0)
  })

  it('throws an error if passed non-array', () => {
    assert.throws(() => highdash.sum(5), Error, 'Argument is not an array!')
    assert.throws(() => highdash.sum("hello world"), Error, 'Argument is not an array!')
    assert.throws(() => highdash.sum({hello: "world"}), Error, 'Argument is not an array!')
  })

  it('sums all elements', () => {
    assert.equal(highdash.sum([1]), 1)
    assert.equal(highdash.sum([45, 18, 51, 48, 96]), 258)
    assert.equal(highdash.sum([97, 80, 64, 23, 77, 11, 24, 55, 79, 34]), 544)
  })
})
