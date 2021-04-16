import styled from 'styled-components';
import { IThemeProps } from '../../styled';

export const Container = styled.div<IThemeProps> `
    width: 98%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 30px 20px;
    margin: 5px auto;
    box-shadow: ${({ theme }) => theme.shadow};
    cursor: pointer;
`;

export const Title = styled.span<IThemeProps> `
    display: block;
    width: 95%;
    font-size: 1.313rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin-bottom: 8px;
`;

export const Author = styled.span<IThemeProps> `
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.primaryLightGrey};
`;

export const AuthorName = styled(Author) `
    text-decoration: underline;
`;

export const SubTitle = styled(Title) `
    margin-top: 20px;
`;

export const Content = styled.p<IThemeProps> `
    width: 90%;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 0.875rem;
    color: ${({ theme }) => theme.colors.secondaryLightGrey};
    margin-top: 20px;
`;