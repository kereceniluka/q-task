import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: string;
    shadow: string;
    border: string;
    borderRadius: string;

    colors: {
        grey: string;
        primaryLightGrey: string;
        secondaryLightGrey: string;
        darkBlue: string;
    };
    breakpoints: {
        sm: string;
        md: string;
        lg: string;
        xLg: string;
        xxLg: string;
    };
    containers: {
        padding: {
            sm: string;
            lg: string;
        };
    };
    alerts: {
        error: Alert;
        info: Alert;
        success: Alert;
    };
  }
}

interface IThemeProps {
    theme: DefaultTheme;
    padding?: 'sm' | 'lg';
    isClicked?: boolean;
}

interface IAlert extends IThemeProps {
    variant: 'error' | 'info' | 'success';
}

type Alert = {
    backgroundColor: string;
    borderColor: string;
    color: string;
}