interface IStore {
    loading: boolean | null;
    error: string | null;
    data: {
        posts: IPost[];
        comments: IComment[];
        users: IUser[];
    },
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

interface IAction {
    type: string;
    payload?: any;
}

interface ICard {
    post: IPost;
    user: IUser[];
    comments: IComment[];
}

interface ICommentItem {
    comment: IComment;
}

interface IAccordion {
    title: string;
    numOfRecords?: number;
}

interface IAlert {
    variant: 'error' | 'info' | 'success';
    text: string;
}

interface ISpinner {
    icon: string;
}