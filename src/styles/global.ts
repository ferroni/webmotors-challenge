import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --text-light: #AAAAAA;
        --text: #888888;
        --text-strong: #333333;
        --shape: #FFFFFF;

        --background: #F4F4F4;    
        --logo-primary: #F51344;
        --logo-secondary: #242424;
        --gold: #d0ab76;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: #EEE; 
    }
    
    ::-webkit-scrollbar-thumb {
        background: #AAA; 
        border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #888; 
    }

    ::-moz-selection { /* Code for Firefox */
        color: #FFF;
        background: var(--logo-primary);
    }

    ::selection {
        color: #FFF;
        background: var(--logo-primary);
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
          -webkit-user-select: none; /* Safari */
           -khtml-user-select: none; /* Konqueror HTML */
             -moz-user-select: none; /* Old versions of Firefox */
              -ms-user-select: none; /* Internet Explorer/Edge */
                  user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Edge, Opera and Firefox */
    }
`