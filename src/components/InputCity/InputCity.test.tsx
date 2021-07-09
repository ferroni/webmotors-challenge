import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { InputCity } from '.'

describe('InputCity Component', () => {
    test('InputCity renders correctly', () => {
        const { getByText } = render(
            <InputCity 
                value={'Text'} 
                clearInput={() => {}}
                handleChange={(value: string) => {}}
            />
        )

        expect(getByText('Onde:')).toBeInTheDocument()
    })
})