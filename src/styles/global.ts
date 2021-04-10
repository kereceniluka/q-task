import styled, { createGlobalStyle } from 'styled-components';

// theme
import { primaryTheme } from '../themes/theme';

export const GlobalStyle = createGlobalStyle `
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root {
        margin: 0 auto;
    }

    body,
    html {
        font-family: ${primaryTheme.fonts.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background: ${primaryTheme.colors.body};
        overflow-x: hidden;
    }
`;

export const PageContainer = styled.div `
    width: 100vw;
    padding: 160px 24px 40px 24px;

    ${primaryTheme.breakpoints.xLg} {
        padding: 64px;
    }
`;

export const SearchSection = styled.div `
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${primaryTheme.colors.body};
    padding: 40px 24px;
    z-index: 2;
`;