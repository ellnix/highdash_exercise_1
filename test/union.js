import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.union', () => {
  it('combines two sets without duplicates', () => {
    const set_a = [1, 2, 3, 2, 4]
    const set_b = [3, 5, 6, 4, 7, 6]
    const result = highdash.union(set_a, set_b)

    assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7])
  })
})
