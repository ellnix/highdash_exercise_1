import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.every', () => {
  it('returns true when array is empty', () => {
    assert.equal(highdash.every([], _el => true), true)
  })

  it('returns false if predicate is always false', () => {
    assert.equal(highdash.every([1, 2, 3], _el => false), false)
  })

  it('returns true if predicate is always true', () => {
    assert.equal(highdash.every([1, 2, 3], _el => true), true)
  })

  it('throws error if first argument is not array', () => {
    assert.throws(() => highdash.every(5, _el => true), Error, 'First argument must be an array!')
    assert.throws(() => highdash.every("hello", _el => true), Error, 'First argument must be an array!')
  }) 

  it('throws error if second argument is not function', () => {
    assert.throws(() => highdash.every([1, 2, 3], "hello"), Error, 'Second argument must be an integer!')
    assert.throws(() => highdash.every([1, 2, 3], {"hello": "world"}), Error, 'Second argument must be an integer!')
  }) 

  it('returns true if all elements return true', () => {
    assert.equal(highdash.every([2, 4, 6], n => n % 2 == 0), true)
    assert.equal(highdash.every(["hello", "world"], s => s.length > 3), true)
  })

  it('stops running function once false is returned', () => {
    let count = 0
    const result = highdash.every([2, 1, 6, 9], n => { count++; return n % 2 == 0 })
    assert.equal(result, false)
    assert.equal(count, 2)
  })
})
