import { useCounter } from './counter'
import { describe, it, expect } from 'vitest'

describe('Counter', () => {
  it('should increment counter', () => {
    const { count, increment, decrement } = useCounter()
    expect(count.value).toBe(0)
    increment()
    expect(count.value).toBe(1)
    decrement()
    expect(count.value).toBe(0)
  })
})
