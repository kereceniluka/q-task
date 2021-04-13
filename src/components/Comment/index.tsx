import { useEffect, useState } from 'react';
import {
    Container,
    Title,
    Content,
} from './style';

const Comment: React.FC<ICommentItem> = ({ comment }) => {

    const [user, setUser] = useState({});

    useEffect(() => {
        
    }, [comment]);

    return (
        <Container>
            <Title>{comment.name}</Title>
            <Content>{comment.body}</Content>
        </Container>
    );
}

export default Comment;
