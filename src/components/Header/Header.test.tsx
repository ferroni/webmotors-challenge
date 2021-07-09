import { getByAltText, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Header } from '.'

describe('Select Component', () => {
    test('Select renders correctly', () => {
        const { getByAltText } = render(
            <Header />
        )

        expect(getByAltText('lf money')).toBeInTheDocument()
    })
})