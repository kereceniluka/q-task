import { render } from '@testing-library/react';
import Comment from '../Comment';
import { ThemeProvider } from 'styled-components';
import { mainTheme } from '../../themes/theme';

test('should render Comment component', () => {

    const comment = {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    }

    render(
        <ThemeProvider theme={mainTheme}>
            <Comment comment={comment} />
        </ThemeProvider>
    );
});