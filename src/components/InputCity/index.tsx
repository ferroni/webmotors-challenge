import { Container, Label, Input, CloseIcon } from './styles'

interface InputCityProps {
    value: string;
    handleChange: (value: string) => void;
    clearInput: () => void;
}

export function InputCity({ value, handleChange, clearInput } : InputCityProps) {
    return (
        <Container className="inputCityComponent">
            <Label>Onde: </Label>
            <Input onChange={event => handleChange(event.target.value)} value={value} />
            <CloseIcon onClick={clearInput} />
        </Container>
    )
}