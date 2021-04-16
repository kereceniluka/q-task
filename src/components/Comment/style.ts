import styled from 'styled-components';
import { IThemeProps } from '../../styled';

export const Container = styled.div<IThemeProps> `
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    border-bottom: ${({ theme }) => theme.border};
`;

export const Title = styled.span<IThemeProps> `
    width: 80%;
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 10px;
`;

export const Content = styled.p<IThemeProps> `
    width: 90%;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.secondaryLightGrey};
`;