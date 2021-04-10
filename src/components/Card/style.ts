import styled from 'styled-components';

// theme
import { primaryTheme } from '../../themes/theme';

export const Container = styled.div `
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: 8px;
    padding: 30px 20px;
    margin: 5px auto;
    box-shadow: ${primaryTheme.shadows.primaryShadow};
`;

export const Title = styled.span `
    display: block;
    width: 100%;
    font-size: 1.313rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: ${primaryTheme.colors.title};
    margin-bottom: 8px;
`;

export const Author = styled.span `
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    color: rgba(45, 45, 72, 0.8);
`;

export const AuthorName = styled(Author) `
    text-decoration: underline;
`;

export const Content = styled.p `
    width: 90%;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.875rem;
    color: ${primaryTheme.colors.content};
    margin-top: 20px;
`;

export const Footer = styled.div `
    display: none;

    ${primaryTheme.breakpoints.xLg} {
        display: block;
        width: 100%;
        align-self: flex-end;
        margin-top: 20px;
    }
`;