import { render } from '@testing-library/react';
import Accordion from '../Accordion';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes/theme';

test('should render Accordion component', () => {
    render(
        <ThemeProvider theme={mainTheme}>
            <Accordion title="Comments" />
        </ThemeProvider>
    );
});