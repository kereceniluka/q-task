import { useEffect } from 'react';
import { Container } from './style';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const PostsList: React.FC = withGreeting(({ children, message }) => {

    useEffect(() => console.log(`${message} ${PostsList.displayName}`), []);

    return (
        <Container>
            {children}
        </Container>
    );
})

PostsList.displayName = 'PostsList component';

export default PostsList;
