import styled from 'styled-components';

// theme
import { primaryTheme } from '../../themes/theme';

export const Container = styled.div `
    display: grid;
    grid-template-columns: 100%;
    row-gap: 20px;

    ${primaryTheme.breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 10px;
    }

    ${primaryTheme.breakpoints.xLg} {
        grid-template-columns: repeat(3, 1fr);
        margin-top: 100px;
    }

    ${primaryTheme.breakpoints.xxLg} {
        grid-template-columns: repeat(4, 1fr);
    } 
`;