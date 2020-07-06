import { createGlobalStyle } from "styled-components";

import HelveticaNeueNormal from "./common/fonts/HelveticaNeueCyr-Roman.ttf";
import HelveticaNeueNormalLight from "./common/fonts/HelveticaNeueCyr-Light.ttf";
import MillerBannerLight from "./common/fonts/MillerBannerLight.otf";

export const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueNormal}) format('truetype');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Helvetica Neue';
        src: url(${HelveticaNeueNormalLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Miller Banner';
        src: url(${MillerBannerLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }
`;

export const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: rgba(255, 255, 255, 0.9);
        font-family: "Helvetica Neue", sans-serif;
        color: #202020;
        font-size: 22px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }
`;
