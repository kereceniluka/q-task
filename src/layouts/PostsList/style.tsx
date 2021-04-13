import styled from 'styled-components';
import { IThemeProps } from '../../styled';

export const Container = styled.div<IThemeProps> `
    display: grid;
    grid-template-columns: 100%;
    align-items: flex-start;
    row-gap: 20px;

    ${({ theme }) => theme.breakpoints.md} {
        grid-template-columns: repeat(2, 1fr);
        gap: 20px 10px;
    }

    ${({ theme }) => theme.breakpoints.xLg} {
        grid-template-columns: repeat(3, 1fr);
    }
`;