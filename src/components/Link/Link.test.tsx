import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Link } from '.'

describe('<Link />', () => {
  it('should render Link component', () => {
    const linkText = 'Texto do link'

    render(<Link>{linkText}</Link>);

    const sut = screen.getByRole('link', {name: linkText})

    expect(sut).toBeInTheDocument()
  })
})