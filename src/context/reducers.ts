import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
} from './constants';

const globalReducer = (state: IStore, action: IAction) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: { ...action.payload } };
        case FETCH_DATA_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default globalReducer;