import { render } from '@testing-library/react';
import PostsList from '../PostsList';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes/theme';

test('should render PostsList component', () => {
    render(
        <ThemeProvider theme={mainTheme}>
            <PostsList />
        </ThemeProvider>
    );
});