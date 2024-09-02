import Adding from '@/app/page/Adding'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

 
describe('Adding', () => {
  it('renders a number', () => {
    render(<Adding />)
    const countElement = screen.getByText(/count : 3/i)
    expect(countElement).toBeInTheDocument()
  })
})