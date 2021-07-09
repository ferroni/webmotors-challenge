import { Container, HiddenBox, StyledBox, Icon, Label } from './styles'

interface CheckBoxProps {
    checked: boolean;
    text: string;
    handleClick: () => void;
}

export function CheckBox({ checked, text, handleClick } : CheckBoxProps) {
    return (
        <Container>
            <HiddenBox type="checkbox" onChange={() => {}} checked={checked}>
            </HiddenBox>
            <StyledBox className="noselect" onClick={handleClick} checked={checked}>
                <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                </Icon>
            </StyledBox>
            <Label>{text}</Label>
        </Container>
    )
}