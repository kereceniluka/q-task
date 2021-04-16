import { useEffect } from 'react';
import { Container } from './style';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const ListItems: React.FC = withGreeting(({ children, message }) => {

    useEffect(() => console.log(`${message} ${ListItems.displayName}`), []);

    return (
        <Container>
            {children}
        </Container>
    );
})

ListItems.displayName = 'ListItems component';

export default ListItems;
