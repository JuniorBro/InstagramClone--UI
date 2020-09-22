import { createGlobalStyle } from "styled-components/macro";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 1.5rem;
        font-family: ${(props) => props.theme.fontFamily};
    }

    body {
        background-color: ${(props) => props.theme.whiteColor};
        overflow-x: hidden;
        position: relative;
    }

    .mainContainer {
        width: 65%;
        margin: 1.5rem auto;
    }
`;
