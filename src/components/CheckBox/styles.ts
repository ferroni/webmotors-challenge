import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;    
`;

export const HiddenBox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    /*clippath: inset(50%);*/
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const Icon = styled.svg`
    fill: none;
    stroke: var(--logo-primary);
    stroke-width: 3px;
    padding-bottom: 4px;
`
interface StyledBoxProps {
    checked: boolean;
}

export const StyledBox = styled.div<StyledBoxProps>`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid var(--text);
    transition: all 150ms;
    cursor: pointer;

    ${HiddenBox}:focus + & {
        box-shadow: 0 0 0 3px pink;
    };

    ${Icon} {
        visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    };
`

export const Label = styled.label`
    padding-left: 0.5rem;
    margin-top: 0.1rem;
`