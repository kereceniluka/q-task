import styled from 'styled-components';
import { IThemeProps } from '../../styled';

export const Container = styled.div<IThemeProps> `
    width: 98%;
    height: 60px;
    display: flex;
    align-items: center;
    background: #ffffff;
    padding: 0 20px;
    margin: 5px auto;
    border-radius: 6px;
    box-shadow: ${({ theme }) => theme.shadow};
    z-index: 1;

    ${({ theme }) => theme.breakpoints.lg} {
        width: 60%;
    }

    ${({ theme }) => theme.breakpoints.xLg} {
        width: 60%;
    }

    ${({ theme }) => theme.breakpoints.xxLg} {
        width: 40%; 
    }
`;

export const Input = styled.input<IThemeProps> `
    border: 0;
    outline: 0;
    flex: 1;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.secondaryLightGrey};
    margin: 0 15px;

    ${({ theme }) => theme.breakpoints.xLg} {
        font-size: 1rem;
    }
`;