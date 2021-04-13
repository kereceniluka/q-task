import { useState } from 'react';
import {
    Container,
    Header,
    Title,
    Body,
} from './style';
import { IconContext } from 'react-icons';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion: React.FC<IAccordion> = ({ title, children, numOfRecords }) => {

    const [clicked, setClicked] = useState(false);

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
}

export default Accordion;
