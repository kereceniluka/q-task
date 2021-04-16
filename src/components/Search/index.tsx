import { useEffect, useRef, useState, useContext } from 'react';
import { 
    Container,
    Input,
} from './style';

import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';

// context
import { Store } from '../../context/store';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const Search: React.FC = withGreeting(({ message }) => {

    const { posts, searchPosts } = useContext(Store);
    const searchRef = useRef<HTMLInputElement>(null);
    const [term, setTerm] = useState<string>('');

    useEffect(() => console.log(`${message} ${Search.displayName}`), []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (term === searchRef.current?.value) {
                searchPosts(term);
            }
        }, 500);

        return () => {
            clearTimeout(timer);
        }
    }, [term, searchRef]);

    return (
        <Container>
            <IconContext.Provider value={{ size: '18px', color: 'rgba(45, 45, 72, 0.6)' }}>
                <GoSearch />
            </IconContext.Provider>
            <Input 
                type="text" 
                name="term" 
                placeholder="Search with author's name or email" 
                ref={searchRef} 
                onChange={({ target }) => setTerm(target.value)} 
                disabled={!posts?.length} 
            />
        </Container>
    );
})

Search.displayName = 'Search component';

export default Search;
