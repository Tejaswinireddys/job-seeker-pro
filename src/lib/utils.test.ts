import test from 'node:test'
import assert from 'node:assert/strict'
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
// @ts-ignore - import compiled JS to satisfy NodeNext resolution
import { cn } from './utils.js'

test('cn merges class names', () => {
  assert.equal(cn('foo', 'bar'), 'foo bar')
})
