import { useEffect, useContext } from 'react';
import { SearchSection } from '../styles/global';

// components
import Search from '../components/Search';
import Card from '../components/Card';

// layouts
import PostsList from '../layouts/PostsList';

// styles
import { PageContainer } from '../styles/global';

// context
import { Store } from '../context/store';

const Posts: React.FC = () => {

    const { posts, users, fetchPosts } = useContext(Store);

    useEffect(() => {
        posts.data.length === 0 && fetchPosts();
    }, []);

    return (
        <>
            <SearchSection>
                <Search />
            </SearchSection>
            <PageContainer>
                <div>
                    <PostsList>
                        {posts.data.length > 0 
                            && users.data.length > 0 
                            && posts.data.map((post: IPost) => (
                            <Card 
                                key={post.id}
                                windowSize={window.innerWidth} 
                                post={post} 
                                user={users.data.filter((user: IUser) => user.id === post.userId)} 
                            />
                        ))}
                    </PostsList>
                </div>
            </PageContainer>
        </>
    );
}

export default Posts;
