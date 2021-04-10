import { useHistory } from 'react-router-dom';
import {
    Container,
    Background,
    Text,
    LinkIcon,
} from './style';

const AnimatedButton: React.FC<IAnimatedButton> = ({ children, className, to }) => {
    
    const history = useHistory();

    const handleOnClick = (to: string) => {
        if (to) {
            history.push(to);
        }
    }
    
    return (
        <Container className={className} onClick={() => handleOnClick(to)}>
            <Background />
            <Text>
                {children}
                <LinkIcon />
            </Text>
        </Container>
    );
}

export default AnimatedButton;
