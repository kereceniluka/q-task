import { useEffect, useContext } from 'react';
import { FixedSection } from '../styles/global';

// assets
import spinner from '../assets/spinner.svg';

// components
import Search from '../components/Search';
import Card from '../components/Card';
import Alert from '../components/Alert';
import Spinner from '../components/Spinner';

// layouts
import PostsList from '../layouts/PostsList';

// styles
import { PageContainer } from '../styles/global';

// context
import { Store } from '../context/store';

const Posts: React.FC = () => {

    const { fetchData, posts, comments, users, searchedPosts, loading, error } = useContext(Store);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <FixedSection>
                <Search />
            </FixedSection>
            <PageContainer padding="lg">
                <div>
                    {loading ? 
                        <Spinner icon={spinner} /> : (
                        <PostsList>
                            {searchedPosts && searchedPosts?.length ? (
                                searchedPosts.map((post: IPost) => <Card 
                                                                        key={post.id} 
                                                                        post={post} 
                                                                        user={users.filter((user: IUser) => user.id === post.userId)} 
                                                                        comments={comments.filter((comment: IComment) => comment.postId === post.id)} />)
                            ) : (
                                posts.map((post: IPost) => <Card 
                                                                key={post.id} 
                                                                post={post} 
                                                                user={users.filter((user: IUser) => user.id === post.userId)} 
                                                                comments={comments.filter((comment: IComment) => comment.postId === post.id)} />
                            ))}
                        </PostsList>
                    )}
                    {error && <Alert variant="error" text={error} />}
                </div>
            </PageContainer>
        </>
    );
}

export default Posts;
