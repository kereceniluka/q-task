import styled from 'styled-components';

// theme
import { primaryTheme } from '../../themes/theme';

export const Container = styled.div `
    width: 98%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 0 20px;
    margin: 5px auto;
    border-radius: 6px;
    box-shadow: ${primaryTheme.shadows.primaryShadow};
    z-index: 1;

    ${primaryTheme.breakpoints.xLg} {
        width: 60%;
    }

    ${primaryTheme.breakpoints.xxLg} {
        width: 40%; 
    }
`;

export const Input = styled.input `
    border: 0;
    outline: 0;
    flex: 1;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    color: ${primaryTheme.colors.placeholder};
    margin: 0 15px;

    ${primaryTheme.breakpoints.xLg} {
        font-size: 1rem;
    }
`;