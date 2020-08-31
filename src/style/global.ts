import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: ${({ theme }) => theme.fontSizes.primary}
    }
`;

export default GlobalStyles;
