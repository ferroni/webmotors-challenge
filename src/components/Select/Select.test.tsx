import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Select } from '.'

describe('Select Component', () => {
    test('Select renders correctly', () => {
        const { getByText } = render(
            <Select 
            isOpen={true} 
                text={'Text'} 
                label={'Label'}
                handleIsOpen={() => {}}
            >
            </Select>
        )

        expect(getByText('Text')).toBeInTheDocument()
    })
})