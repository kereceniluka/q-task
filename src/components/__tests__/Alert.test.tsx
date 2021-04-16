import { render } from '@testing-library/react';
import Alert from '../Alert';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes/theme';

test('should render Alert component', () => {
    render(
        <ThemeProvider theme={mainTheme}>
            <Alert variant="error" text="Error" />
        </ThemeProvider>
    );
});