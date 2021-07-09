import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;

    padding: 0 1rem;
    max-width: 933px;
`;

export const Header = styled.div`    
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button.sellMyCarBtn {
        font-size: 1rem;
        font-weight: 600;
        color: var(--gold);

        background: transparent;
        border: 2px solid var(--gold);
        border-radius: 0.25rem;
        padding: 0 2rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: space-between;

        transition: filter 0.15s;

        &:hover {
            filter: brightness(1.1);
        }
    }

    @media (max-width: 890px) {
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;

        button.sellMyCarBtn {
            display: block;
            line-height: 1rem;
            padding: 0.2rem 0.2rem;
            height: 3.5rem;
        }

        div {
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;

            button {
                width: 100%;
            }
        }
    }
`;

interface TabProps {
    isActive: boolean;
}

export const Tab = styled.button<TabProps>`
    font-size: 1rem;
    color: #999;
    background: transparent;
    padding: 0 1rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 0;
    border-bottom: ${(props) => props.isActive 
        ? '3px solid #F51344'
        : '1px solid #DDD'
    };

    img {
        padding: 0.5rem 1rem 0 0;
    }

    div {
        display: block;
        text-align: left;

        &:first-child {
            font-size: 0.8rem;
            line-height: 1.2rem;
            color: var(--text);
        }

        &:last-child {
            font-size: 1.4rem;
            line-height: 1rem;
            color: ${(props) => 
                props.isActive && '#F51344'
            };
        }
    }

    transition: filter 0.15s, border-bottom 0.2s;

    &:hover {
        filter: brightness(${(props) => 
            !props.isActive && 0.8
        });
    }

    @media (max-width: 890px) {
        padding: 0 0.5rem;

        img {
            padding: 0.5rem 0.5rem 0 0;
        }
    }
`;

export const Content = styled.form`
    background: var(--shape);
    max-height: 312px;
    border-right: 1px solid #DDD;
    border-bottom: 1px solid #DDD;
    padding: 2rem 3.5rem;

    @media (max-width: 890px) {
        max-height: fit-content;
        padding: 2rem 2rem;
    }
`;


export const FilterGroup = styled.div`
    & + div {
        padding-top:  1.1rem;

        @media (max-width: 890px) {
            padding-top:  0;
        }
    }

    &:nth-child(1) {
        width: 13rem;
        display: flex;
        align-items: center;
        justify-content: space-between;        
    }

    &:nth-child(2) {
        .fusionInputs {
            display: flex;

            div + div {
                border-radius: 0 0.25rem 0.25rem 0;
                margin: 0 1px 0 -1px;
            }
        }

        @media (max-width: 890px) {
            .filterSubgroup {
                display: block;

                .selectComponent, .inputCityComponent {
                    margin: 1rem 0;
                    border-radius: 0.25rem;
                }
            }
        }
    }

    &:nth-child(3) {
        @media (max-width: 890px) {
            .filterSubgroup {
                display: block;

                .selectComponent {
                    margin: 1rem 0;
                }
            }
        }
    }

    &:nth-child(4) {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            button:first-child {
                color: var(--text);
                font-weight: 400;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(0.6);
                }
            }
        }

        button {
            background: transparent;
            color: var(--logo-primary);
            font-weight: 500;

            border: 0;
            border-radius: 0.25rem;

            span {
                margin-right: 0.2rem;
                font-size: 0.8rem;
            }

            transition: filter 0.2s;

            &:hover {
                filter: brightness(1.5);
            }

            &[type="submit"] {
                background: var(--logo-primary);
                color: #FFF;
                font-weight: 600;
                font-size: 1.1rem;
                width: 20rem;
                height: 3.5rem;
                border: 0;
                border-radius: 0.25rem;
                margin-left: 2rem;

                transition: filter 0.2s;

                &:hover {
                    filter: brightness(1.25);
                }
            }
        }

        @media (max-width: 890px) {
            display: block;
            width: 100%;
            div {
                display: block;
                button {
                    display: block;
                    width: 100%;
                    &[type="submit"] {
                        width: 100%;
                        margin: 0;
                        margin-top: 1.5rem;
                    }
                }
            }

            button {
                width: 100%;
                margin: 0.75rem 0;
            }
        }
    }
`;

export const FilterSubgroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
`;