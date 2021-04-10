import styled, { keyframes } from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';

// theme
import { primaryTheme } from '../../themes/theme';

const buttonBackgroundOnHoverAnimation = keyframes `
    from {
        width: 40%;
    }
    to {
        width: 100%;
        background: #2d2d48;
    }
`;

const buttonBackgroundOffHoverAnimation = keyframes `
    from {
        width: 100%;
        background: #2d2d48;
    }
    to {
        width: 40%;
        background: rgba(16, 25, 33, 0.05);
    }
`;

const buttonTextAnimation = keyframes `
    from {
        color: #2d2d48;
    }
    to {
        color: #ffffff;
    }
`;

export const Background = styled.div `
    width: 40%;
    height: 40px;
    background: rgba(16, 25, 33, 0.05);
    border-radius: 16px;
    animation: ${buttonBackgroundOffHoverAnimation} .5s ease;
`;

export const Text = styled.span `
    text-decoration: none;
    position: absolute;
    display: flex;
    align-items: center;
    top: 50%;
    left: 23%;
    transform: translateY(-50%);
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    color: #2d2d48;
`;

export const LinkIcon = styled(FaLongArrowAltRight) `
    width: 12px;
    margin-left: 6px;
`;

export const Container = styled.div `
    position: relative;
    display: flex;
    align-items: center;
    width: 130px;
    height: 36px;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        ${Background} {
            animation: ${buttonBackgroundOnHoverAnimation} .5s ease;
            animation-fill-mode: forwards; 
        }

        ${Text} {
            animation: ${buttonTextAnimation} .5s ease;
            animation-fill-mode: forwards;
        }
    }
`;