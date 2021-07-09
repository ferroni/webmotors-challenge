import styled from "styled-components";
import arrowImg from '../../assets/arrow.png'

interface ContainerProps {
    disabled?: boolean;
}

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 3rem;

    border: 1px solid var(--text-light);
    border-radius: 0.25rem;

    background: url(${arrowImg}) no-repeat right;
    background-size: 20px 20px;

    cursor: pointer; 

    transition: opacity 0.2s;
`;

export const Header = styled.div`
    background: var(--shape);
    width: fit-content;
    position: relative;
    top: 0.70rem;
    left: 0.5rem;
    display: flex;  
`;

export const Label = styled.div`
    color: var(--text);
`;

export const Value = styled.div`
    font-weight: 500;
    color: var(--text-strong);
    padding-left: 0.3rem;

    white-space: nowrap;
    max-width: 295px;
    overflow: hidden;
    text-overflow: clip;
`;

interface ContentProps {
    isOpened: boolean;
    disabled?: boolean;
}

export const Content = styled.div<ContentProps>`
    width: 100%;
    height: 100%;
    max-height: 16.5rem;
    overflow-y: auto;
    background: transparent;
    color: gray;
    font-size: 0.9rem;
    border: 1px solid var(--text);
    border-radius: 0.25rem;
    cursor: pointer;

    height: fit-content;
    top: 1.3rem;
    position: relative;
    z-index: 9999;

    -webkit-appearance: none;

    display: ${(props) => props.isOpened && !props.disabled 
        ? 'block'
        : 'none'
    };

    option {
        color: var(--text-strong);
        background: var(--shape);
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 2px 2px 1px 10px;
        white-space: pre-wrap;

        &:hover {
            background-color: var(--logo-primary);
            color: #FFF;
        }
    }
`;

export const HiddenSelect = styled.select`
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