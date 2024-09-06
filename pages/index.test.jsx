import { vi, afterEach, describe, expect, test, beforeEach } from 'vitest'
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'

import Home from './index'

describe('Home', () => {
  afterEach(() => {
    cleanup()
  })

  test('should render', () => {
    //   export it renders
    render(<Home />)

    //   export it renders

    expect(screen.getByRole('heading', { level: 1, name: 'Welcome to Movie Guide' })).toBeDefined()
  })

  describe('Search input', () => {
    test('should render', () => {
      //   export it renders
      render(<Home />)

      //   export it renders
      expect(screen.getByPlaceholderText('Search show')).toBeDefined()
    })

    test('should render hint text', () => {
      //   export it renders
      render(<Home />)

      //   export it renders
      expect(screen.getByText('e.g. search for batman')).toBeDefined()
    })

    test('show search results when searching', async () => {
      //   export it renders
      render(<Home />)

      // fill search input
      const searchInput = screen.getByPlaceholderText('Search show')
      fireEvent.change(searchInput, { target: { value: 'dracula' } })
      expect(searchInput.value).toBe('dracula')

      // show loading
      expect(screen.getByRole('status')).toBeDefined()

      await waitFor(() => {
        expect(screen.getByTestId('search-results-container')).toBeDefined()
        expect(screen.getAllByTestId('search-result')).toBeDefined()
        expect(screen.getAllByTestId('search-result').length).toEqual(4)
        // expect(screen.getAllByRole('listitem').length)
      })
    })

    test('should render no results found when no shows found', async () => {
      //   export it renders
      render(<Home />)

      // fill search input
      const searchInput = screen.getByPlaceholderText('Search show')
      fireEvent.change(searchInput, { target: { value: 'no results' } })
      expect(searchInput.value).toBe('no results')

      // show loading
      expect(screen.getByRole('status')).toBeDefined()

      await waitFor(() => {
        expect(screen.getAllByTestId('no-shows-found')).toBeDefined()
      })
    })
  })
})
