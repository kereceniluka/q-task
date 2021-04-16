import { render } from '@testing-library/react';
import Search from '../Search';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes/theme';

test('should render Search component', () => {

    render(
        <ThemeProvider theme={mainTheme}>
            <Search />
        </ThemeProvider>
    );
});