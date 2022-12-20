import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('<Input />', () => {
  it('should render Input component', () => {
    render(<Input />);

    const sut = screen.getByPlaceholderText("Buscar conteúdo")

    expect(sut).toBeInTheDocument()
  })
})