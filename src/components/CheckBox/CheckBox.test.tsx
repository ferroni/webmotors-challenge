import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { CheckBox } from '.'

describe('CheckBox Component', () => {
    test('checkbox renders correctly', () => {
        const { getByText } = render(
            <CheckBox 
                checked={true} 
                text={'Text'} 
                handleClick={() => {}}
            />
        )

        expect(getByText('Text')).toBeInTheDocument()
    })
})