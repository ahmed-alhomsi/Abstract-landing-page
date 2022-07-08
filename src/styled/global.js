import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'GT America Standard', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    img {
        max-width: 100px;
        max-height: 100px;
    }

    p {
        font-size: 24px;
    }
`