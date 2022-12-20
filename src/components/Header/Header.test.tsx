import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '.'

describe('<Header />', () => {
  it('should render Header component', () => {
    render(<Header />);

    const sut = screen.getByRole('banner')

    expect(sut).toBeInTheDocument()
  })
})