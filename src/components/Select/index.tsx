import { memo, ReactElement } from 'react';
import { Container, Content, Header, Label, Value, HiddenSelect } from './styles'

interface SelectProps {
    isOpen: boolean;
    label: string;
    text: string;
    handleIsOpen: () => void;
    disabled?: boolean;
    children: ReactElement[];
}

function SelectComponent({ isOpen, label, text, handleIsOpen, disabled, children } : SelectProps) {
    return (
        <Container 
            className="selectComponent"
            disabled={disabled} 
            onClick={handleIsOpen} 
        >
            <Header className="noselect">
                <Label>{label}</Label>
                <Value>{text}</Value>
            </Header>
            <HiddenSelect value={text} onChange={() => {}}>
            </HiddenSelect>
            <Content className="noselect" disabled={disabled} isOpened={isOpen}>
                {children}
            </Content>
        </Container>
    )
}

export const Select = memo(SelectComponent)