import { useHistory } from 'react-router-dom';
import {
    Container,
    Title,
    Content,
    Author,
    AuthorName,
    Footer,
} from './style';

// components
import AnimatedButton from '../AnimatedButton';

const Card: React.FC<IPostCard> = ({ windowSize, post, user }) => {

    const history = useHistory();

    const handleOnClick = (postId: number) => {
        history.push(`/post/${postId}`);
    }

    return (
        <Container onClick={windowSize < 1200 ? () => handleOnClick(post.id) : undefined}>
            <Title>{post.title}</Title>
            <Author>by <AuthorName>{user[0].name ?? 'Unknown'}</AuthorName></Author>
            <Content>{post.body}</Content>
            <Footer>
                <AnimatedButton to={`/post/${post.id}`}>Read more</AnimatedButton>
            </Footer>
        </Container>
    );
}

export default Card;
