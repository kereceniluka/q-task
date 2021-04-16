import { useReducer, createContext } from 'react';
import axios from 'axios';

// constants
import {
    FETCH_DATA_REQUEST, 
    FETCH_DATA_SUCCESS, 
    FETCH_DATA_FAIL,
    SEARCH_POSTS_REQUEST,
    SEARCH_POSTS_FAIL,
    SEARCH_POSTS_SUCCESS,
    SEARCH_POSTS_RESET,
} from './constants';

// reducers
import reducer from './reducers';

// services
import api from '../services/api';

const initialState: IStore = {
    loading: null,
    error: null,
    data: {
        posts: [],
        comments: [],
        users: [],
        searchedPosts: []
    },
}

export const Store = createContext<IStore | any>(initialState);

export const StoreProvider: React.FC = (props: any) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {

        dispatch({ type: FETCH_DATA_REQUEST });

        try {

            const fetchedData = await axios.all([
                api.get('/posts'),
                api.get('/comments'),
                api.get('/users'),
            ]);

            const data = {
                posts: fetchedData[0].data,
                comments: fetchedData[1].data,
                users: fetchedData[2].data,
            }

            dispatch({ type: FETCH_DATA_SUCCESS, payload: data });

        } catch (error) {
            dispatch({ type: FETCH_DATA_FAIL, payload: 'An error occurred while fetching data.' });
        }
    }

    const searchPosts = async (term: string) => {

        dispatch({ type: SEARCH_POSTS_REQUEST });

        const user = state.data.users.find((user: IUser) => user.name.includes(term) || user.email.includes(term));

        try {

            if (user?.id && term) {

                const { data } = await api.get(`/users/${user.id}/posts`);
                dispatch({ type: SEARCH_POSTS_SUCCESS, payload: data });
            
            } else if (term === '') {
                dispatch({ type: SEARCH_POSTS_RESET });
            }

        } catch (error) {
            dispatch({ type: SEARCH_POSTS_FAIL, payload: error });
        }
    }

    const value = {
        posts: state.data.posts,
        comments: state.data.comments,
        users: state.data.users,
        searchedPosts: state.data.searchedPosts,
        loading: state.loading,
        error: state.error,
        fetchData,
        searchPosts,
    }

    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    );
}