import styled, { createGlobalStyle } from 'styled-components';
import { IThemeProps } from '../styled';

export const GlobalStyle = createGlobalStyle<IThemeProps> `
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root {
        margin: 0 auto;
    }

    body,
    html {
        font-family: ${({ theme }) => theme.font};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background: ${({ theme }) => theme.colors.grey};
        overflow-x: hidden;
    }
`;

export const PageContainer = styled.div<IThemeProps> `
    width: 100vw;
    padding: ${({ theme, padding }) => padding === 'sm' ? theme.containers.padding.sm : theme.containers.padding.lg};
    margin: 0 auto;

    ${({ theme }) => theme.breakpoints.lg} {
        max-width: 800px;
    }

    ${({ theme }) => theme.breakpoints.xLg} {
        max-width: 1000px;
    }

    ${({ theme }) => theme.breakpoints.xxLg} {
        max-width: 1400px;
    }
`;

export const FixedSection = styled.div<IThemeProps> `
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey};
    padding: 40px 24px;
    z-index: 2;
`;

// Post Page
export const Title = styled.h1<IThemeProps>`
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.125rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 10px;

    ${({ theme }) => theme.breakpoints.lg} {
        width: 80%;
        font-size: 2.25rem;
        line-height: 2.375rem;
        margin-bottom: 16px;
    }
`;

export const Author = styled.span<IThemeProps> `
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.primaryLightGrey};
`;

export const AuthorName = styled(Author) `
    text-decoration: underline;
`;

export const Content = styled.p<IThemeProps> `
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.375rem;
    color: ${({ theme }) => theme.colors.secondaryLightGrey};
    margin: 40px 0 60px 0;
`;

export const CommentsTitle = styled(Title) `
    font-size: 1.75rem;
    line-height: 2.25rem;
`;