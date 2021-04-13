import { Wrapper } from './style';

const Spinner: React.FC<ISpinner> = ({ icon }) => {
    return (
        <Wrapper>
            <img src={icon} alt="spinner" />
        </Wrapper>
    );
}

export default Spinner;
