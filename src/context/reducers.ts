import {
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_REQUEST,
    FETCH_USERS_FAIL,
} from './constants';

const globalReducer = (state: IState, action: IAction) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return { ...state, posts: { ...state.posts, loading: true } };
        case FETCH_POSTS_SUCCESS:
            return { ...state, posts: { ...state.posts, loading: false, data: action.payload } };
        case FETCH_POSTS_FAIL:
            return { ...state, posts: { ...state.posts, loading: false, error: action.payload } };
        case FETCH_USERS_REQUEST:
            return { ...state, users: { ...state.users, loading: true } };
        case FETCH_USERS_SUCCESS:
            return { ...state, users: { ...state.users, loading: false, data: action.payload } };
        case FETCH_USERS_FAIL:
            return { ...state, users: { ...state.users, loading: false, error: action.payload } };
        default:
            return state;
    }
}

export default globalReducer;