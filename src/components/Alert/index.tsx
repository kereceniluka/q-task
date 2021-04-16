import { useEffect } from 'react';
import { Container } from './style';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const Alert: React.FC<IAlert> = withGreeting(({ variant, text, message }) => {

    useEffect(() => console.log(`${message} ${Alert.displayName}`), []);

    return (
        <Container variant={variant}>
            <p>{text}</p>
        </Container>
    );
})

Alert.displayName = 'Alert component';

export default Alert;
