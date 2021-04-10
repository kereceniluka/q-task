import { useReducer, createContext } from 'react';
import axios from 'axios';

// reducers
import reducer from './reducers';

// constants
import {
    FETCH_POSTS_REQUEST, 
    FETCH_POSTS_SUCCESS, 
    FETCH_POSTS_FAIL,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
} from './constants';

// services
import api from '../services/api';

const initialState: IState = {
    posts: { loading: null, data: [], error: null },
    comments: { loading: null, data: [], error: null },
    users: { loading: null, data: [], error: null },
}

export const Store = createContext<IState | any>(initialState);

export const StoreProvider: React.FC = (props: any) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchPosts = async () => {

        dispatch({ type: FETCH_POSTS_REQUEST });
        dispatch({ type: FETCH_USERS_REQUEST });

        try {

            const data = await axios.all([
                api.get('/posts'),
                api.get('/users'),
            ]);

            dispatch({ type: FETCH_POSTS_SUCCESS, payload: data[0].data });
            dispatch({ type: FETCH_USERS_SUCCESS, payload: data[1].data });

        } catch (error) {
            dispatch({ type: FETCH_POSTS_FAIL, payload: error });
        }
    }

    const value = {
        posts: state.posts,
        comments: state.comments,
        users: state.users,
        fetchPosts,
    }

    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    );
}