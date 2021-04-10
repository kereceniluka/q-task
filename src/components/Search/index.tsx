import { 
    Container,
    Input,
} from './style';

import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';

const Search: React.FC = () => {
    return (
        <Container>
            <IconContext.Provider value={{ size: '18px', color: 'rgba(45, 45, 72, 0.6)' }}>
                <GoSearch />
            </IconContext.Provider>
            <Input type="text" name="search" placeholder="Search with title or author" />
        </Container>
    );
}

export default Search;
