import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.drop', () => {
  it('drops n elements from array', () => {
    assert.deepStrictEqual(highdash.drop([1, 2, 3, 4], 1), [2, 3, 4])
    assert.deepStrictEqual(highdash.drop([1, 2, 3, 4, 5], 3), [4, 5])
    assert.deepStrictEqual(highdash.drop([1, 2, 3, 4], 2), [3, 4])
    assert.deepStrictEqual(highdash.drop([1, 2, 3], 2), [3])
  })

  it('returns an empty array when passed larger n than array', () => {
    assert.equal(highdash.drop([1, 2, 3], 3).length, 0)
  })
  
  // it('when passed 0 returns original array', () => {
  //   assert.deepStrictEqual(highdash.drop([1, 2, 3], 0), [1, 2, 3])
  // })

  // it('returns empty array if the array is undefined or null', () => {
  //   assert.equal(highdash.drop(null, 3).length, 0)
  //   assert.equal(highdash.drop(undefined, 3).length, 0)
  // })

  // it('throws error if first argument is not array', () => {
  //   assert.throws(() => highdash.drop(5, 3), Error, 'First argument must be an array!')
  //   assert.throws(() => highdash.drop("hello", 3), Error, 'First argument must be an array!')
  // }) 

  // it('throws error if second argument is not integer', () => {
  //   assert.throws(() => highdash.drop([1, 2, 3], "hello"), Error, 'Second argument must be an integer!')
  //   assert.throws(() => highdash.drop([1, 2, 3], {"hello": "world"}), Error, 'Second argument must be an integer!')
  // }) 
})
