import styled from 'styled-components';
import { IThemeProps } from '../../styled';

export const Container = styled.div `
    width: 100%;
    margin-top: 30px;
`;

export const Header = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.span<IThemeProps> `
    font-size: 1.125rem;
    line-height: 1.25rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
`;

export const Body = styled.div<IThemeProps> `
    width: 100%;
    display: ${({ isClicked }) => isClicked ? 'block' : 'none'};
`;