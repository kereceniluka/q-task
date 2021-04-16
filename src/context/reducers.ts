import {
    FETCH_DATA_REQUEST,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAIL,
    SEARCH_POSTS_REQUEST,
    SEARCH_POSTS_SUCCESS,
    SEARCH_POSTS_FAIL,
    SEARCH_POSTS_RESET,
} from './constants';

const globalReducer = (state: IStore, action: IAction) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return { ...state, loading: true };
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: { ...action.payload } };
        case FETCH_DATA_FAIL:
            return { ...state, loading: false, error: action.payload };
        case SEARCH_POSTS_REQUEST:
            return { ...state, loading: true };
        case SEARCH_POSTS_SUCCESS:
            return { ...state, loading: false, data: { ...state.data, searchedPosts: action.payload } };
        case SEARCH_POSTS_RESET:
            return { ...state, loading: false, data: { ...state.data, searchedPosts: [] } };
        case SEARCH_POSTS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default globalReducer;