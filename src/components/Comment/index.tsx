import { useEffect, useState } from 'react';
import {
    Container,
    Title,
    Content,
} from './style';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const Comment: React.FC<ICommentItem> = withGreeting(({ comment, message }) => {

    const [user, setUser] = useState({});

    useEffect(() => console.log(`${message} ${Comment.displayName}`), []);

    return (
        <Container>
            <Title>{comment.name}</Title>
            <Content>{comment.body}</Content>
        </Container>
    );
})

Comment.displayName = 'Comment component';

export default Comment;
