import { DefaultTheme } from 'styled-components';

const mainTheme: DefaultTheme = {
    font: `'Quicksand', sans-serif`,
    shadow: '0px 1px 4px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(45, 45, 72, 0.05)',
    borderRadius: '8px',
    colors: {
        grey: '#f9f9f9',
        primaryLightGrey: 'rgba(45, 45, 72, 0.8)',
        secondaryLightGrey: 'rgba(45, 45, 72, 0.6)',
        darkBlue: '#2d2d48',
    },
    breakpoints: {
        sm: '@media screen and (min-width: 576px)',
        md: '@media screen and (min-width: 768px)',
        lg: '@media screen and (min-width: 992px)',
        xLg: '@media screen and (min-width: 1200px)',
        xxLg: '@media screen and (min-width: 1400px)', 
    },
    containers: {
        padding: {
            sm: '40px 24px',
            lg: '160px 24px 40px 24px',
        }
    },
    alerts: {
        error: {
            backgroundColor: '#f8d7da',
            borderColor: '#f5c6cb',
            color: '#721c24',
        },
        info: {
            backgroundColor: '#cce5ff',
            borderColor: '#b8daff',
            color: '#004085',
        },
        success: {
            backgroundColor: '#d4edda',
            borderColor: '#c3e6cb',
            color: '#155724',
        },
    },
};

export { mainTheme };