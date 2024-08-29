import highdash from '../highdash.js'
import assert from 'assert'

describe('Highdash.uniq', () => {
  it('removes duplicated elements', () => {
    // also maintains array order
    assert.deepEqual(highdash.uniq([3, 1, 1, 4, 3, 5, 4, 6]), [3, 1, 4, 5, 6])
  })
})
