import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    // GLOBAL STYLES
    * {
        font-family: Montserrat, sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${props => props.theme.colors.background};
    }
`;
