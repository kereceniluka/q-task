import { Container } from './style';

const PostsList: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default PostsList;
