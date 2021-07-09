import styled from "styled-components";

export const Container = styled.header`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 933px;
    margin: 0 auto;

    padding: 1rem 1rem 3rem;

    img {
        height: 2.5rem;
        width: auto;
    }

    @media (max-width: 890px) {
        padding: 2rem;
        display: flex;
        place-content: center;

        img {
            height: 4rem;
            width: auto;
        }
    }
`;