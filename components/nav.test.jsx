import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'

import Nav from './nav'

describe('Nav', () => {
  afterEach(() => {
    cleanup()
  })

  test('should render', () => {
    render(<Nav />)
    expect(screen.getByRole('navigation', { current: false })).toBeDefined()
  })

  test('should hav a link to home', () => {
    render(<Nav />)
    expect(screen.getByRole('link', { name: 'Home', current: false })).toBeDefined()
  })
})
