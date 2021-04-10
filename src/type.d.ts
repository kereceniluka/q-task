interface IState {
    posts: { 
        loading: boolean | null; 
        data: IPost[];
        error: string | null; 
    };
    comments: {
        loading: boolean | null; 
        data: IComment[];
        error: string | null;
    };
    users: {
        loading: boolean | null;
        data: IUser[];
        error: string | null;
    };
}

interface IAction {
    type: string;
    payload?: any;
}

interface IPostCard {
    key: number;
    windowSize: number;
    post: IPost;
    user: IUser[];
}

interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface IAnimatedButton {
    children?: any;
    className?: string;
    to: string;
}