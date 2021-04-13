import { Container } from './style';

const ListItems: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

export default ListItems;
