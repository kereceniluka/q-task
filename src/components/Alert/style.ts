import styled, { css } from 'styled-components';
import { IAlert } from '../../styled';

export const Container = styled.div<IAlert> `
    width: 98%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 0 auto;

    ${({ variant, theme }) => 
        variant && 
        theme.alerts[variant] &&
        css `
            background-color: ${theme.alerts[variant].backgroundColor};
            color: ${theme.alerts[variant].color};
            border: 1px solid ${theme.alerts[variant].borderColor};
        `
    }

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