import { Container } from './style'; 

const Alert: React.FC<IAlert> = ({ variant, text }) => {
    return (
        <Container variant={variant}>
            <p>{text}</p>
        </Container>
    );
}

export default Alert;
