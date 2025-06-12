import { describe, it, expect } from 'vitest'
import { deepEqual } from '@/services/utils'

describe('deepEqual utility function', () => {
  it('returns true for two equal numbers', () => {
    expect(deepEqual(1, 1)).toBe(true)
  })

  it('returns false for two different strings', () => {
    expect(deepEqual('a', 'b')).toBe(false)
  })

  it('returns true for two shallow equal objects', () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true)
  })

  it('returns false for two shallow objects with different values', () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false)
  })

  it('returns true for deeply equal nested objects', () => {
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 2 } })).toBe(true)
  })

  it('returns false for nested objects with different values', () => {
    expect(deepEqual({ a: { b: 2 } }, { a: { b: 3 } })).toBe(false)
  })

  it('returns true for two equal arrays', () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true)
  })

  it('returns false for arrays with same elements in different order', () => {
    expect(deepEqual([1, 2], [2, 1])).toBe(false)
  })

  it('returns true for arrays of equal objects', () => {
    expect(deepEqual([{ id: 1 }], [{ id: 1 }])).toBe(true)
  })

  it('returns false if one value is null and the other is an object', () => {
    expect(deepEqual(null, { a: 1 })).toBe(false)
  })

  it('returns false if one value is an object and the other is null', () => {
    expect(deepEqual({ a: 1 }, null)).toBe(false)
  })

  it('returns true when both values are null', () => {
    expect(deepEqual(null, null)).toBe(true)
  })

  it('returns false when objects have different number of keys', () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  })

  it('returns false when a key is missing in one object', () => {
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false)
  })

  it('returns false when objects have different number of keys', () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false)
  })
  it('returns false when a key is missing in one object', () => {
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false)
  })
})
