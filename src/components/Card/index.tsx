import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Container,
    Title,
    Author,
    AuthorName,
} from './style';

// components
import Accordion from '../Accordion';
import Comment from '../Comment';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const Card: React.FC<ICard> = withGreeting(({ post, user, comments, message }) => {

    const history = useHistory();

    const onPostClickHandler = (postId: number) => {
        history.push({
            pathname: `/post/${postId}`,
            state: { post, user, comments },
        });
    }

    useEffect(() => console.log(`${message} ${Card.displayName}`), []);

    return (
        <Container>
            <div onClick={() => onPostClickHandler(post.id)}>
                <Title>{post.title}</Title>
                <Author>by <AuthorName>{user[0].name ?? 'Unknown'}</AuthorName></Author>
            </div>
            <Accordion title="Comments" numOfRecords={comments.length}>
                {comments.map((comment: IComment) => <Comment key={comment.id} comment={comment} />)}
            </Accordion>
        </Container>
    );
})

Card.displayName = 'Card component';

export default Card;
