import test from 'ava'

import Promise from './index'

test('Can create a new Promise', (t) => {
  const promise = new Promise()
  t.truthy(promise)
})
