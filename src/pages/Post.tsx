import { useLocation } from 'react-router-dom';
import { PageContainer, Title, Author, AuthorName, Content, CommentsTitle } from '../styles/global';

// layout
import ListItems from '../layouts/ListItems';

// components
import Comment from '../components/Comment';

const Post: React.FC = () => {

    const { state: { post, user, comments } } = useLocation<{post: IPost, user: IUser[], comments: IComment[]}>();

    return (
        <PageContainer padding="sm">
            <Title>{post.title}</Title>
            <Author>by <AuthorName>{user[0].name}</AuthorName></Author>
            <Content>{post.body}</Content>
            <CommentsTitle>Comments ({comments.length})</CommentsTitle>
            <ListItems>
                {comments && (
                    comments.map(comment => <Comment key={comment.id} comment={comment} />
                ))}
            </ListItems>
        </PageContainer>
    );
}

export default Post;
