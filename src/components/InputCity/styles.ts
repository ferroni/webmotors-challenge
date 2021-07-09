import styled from "styled-components";
import locationImg from '../../assets/icon-location.svg'
import closeImg from '../../assets/clear-icon.png'

export const Container = styled.div`
    width: 100%;
    min-width: 250px;
    height: 3rem;

    border: 1px solid var(--text-light);
    border-radius: 0.25rem 0 0 0.25rem;

    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    overflow: hidden;
`;

export const Label = styled.span`
    color: var(--text);
    background: url(${locationImg}) no-repeat scroll -2px 0px;
    padding-left: 25px;
`;

export const CloseIcon = styled.span`
    height: inherit;
    color: var(--text);
    background: url(${closeImg}) no-repeat scroll right;
    background-size: 20px 20px;
    background-position: -2px;
    padding-left: 20px;
    opacity: 0.2;
    cursor: pointer;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-strong);
    padding-left: 0.3rem;
    border: 0;

    &:focus {
        border: 0;
        outline: none;
    }    
`;