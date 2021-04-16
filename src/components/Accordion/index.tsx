import { useState, useEffect } from 'react';
import {
    Container,
    Header,
    Title,
    Body,
} from './style';
import { IconContext } from 'react-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const Accordion: React.FC<IAccordion> = withGreeting(({ title, children, numOfRecords, message }) => {

    const [clicked, setClicked] = useState(false);

    useEffect(() => console.log(`${message} ${Accordion.displayName}`), []);

    return (
        <Container>
            <Header onClick={() => setClicked(prevState => !prevState)}>
                <Title>{title} {numOfRecords && `(${numOfRecords})`}</Title>
                <IconContext.Provider value={{ size: '18px', color: '#2d2d48' }}>
                    {clicked ? <FaChevronUp /> : <FaChevronDown />}
                </IconContext.Provider>
            </Header>
            <Body isClicked={clicked}>
                {children}
            </Body>
        </Container>
    );
})

Accordion.displayName = 'Accordion component';

export default Accordion;
