import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen, waitFor } from '@testing-library/react'

import DetailPage from './[showid]'

import { shows } from '../../vitest.setup'

describe('Movie detail page', () => {
  const selectedShow = shows.find((item) => item.show.id === 1382)

  afterEach(() => {
    cleanup()
  })

  test('should render name of movie', async () => {
    //   export it renders
    render(<DetailPage show={1382} />)

    //   export it renders

    waitFor(() => {
      expect(
        screen.getByRole('heading', { level: 1, name: selectedShow.show.name })
      ).toBeInTheDocument()
    })
  })

  test('should render genres of movie', async () => {
    //   export it renders
    render(<DetailPage show={1382} />)

    //   export it renders

    waitFor(() => {
      expect(screen.getByText(selectedShow.show.genres.join(', '))).toBeInTheDocument()
    })
  })

  test('should render summary of movie', async () => {
    //   export it renders
    render(<DetailPage show={1382} />)

    //   export it renders

    waitFor(() => {
      expect(screen.getByText(selectedShow.show.summary)).toBeInTheDocument()
    })
  })

  test('should render image of movie', async () => {
    //   export it renders
    render(<DetailPage show={1382} />)

    //   export it renders

    waitFor(() => {
      expect(screen.getByAltText(selectedShow.show.name)).toBeInTheDocument()
    })
  })
})
