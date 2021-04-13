import { useHistory } from 'react-router-dom';
import {
    Container,
    Title,
    Author,
    AuthorName,
    SubTitle,
} from './style';

// components
import Accordion from '../Accordion';
import Comment from '../Comment';

const Card: React.FC<ICard> = ({ post, user, comments }) => {

    const history = useHistory();

    const onPostClickHandler = (postId: number) => {
        history.push({
            pathname: `/post/${postId}`,
            state: { post, user, comments },
        });
    }

    return (
        <Container>
            <div onClick={() => onPostClickHandler(post.id)}>
                <Title>{post.title}</Title>
                <Author>by <AuthorName>{user[0].name ?? 'Unknown'}</AuthorName></Author>
            </div>
            <Accordion title="Comments" numOfRecords={comments.length}>
                {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            </Accordion>
        </Container>
    );
}

export default Card;
