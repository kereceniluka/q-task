import { useEffect } from 'react';
import { Wrapper } from './style';

// hoc
import { withGreeting } from '../../hoc/withGreeting';

const Spinner: React.FC<ISpinner> = withGreeting(({ icon, message }) => {

    useEffect(() => console.log(`${message} ${Spinner.displayName}`), []);

    return (
        <Wrapper>
            <img src={icon} alt="spinner" />
        </Wrapper>
    );
})

Spinner.displayName = 'Spinner component';

export default Spinner;
