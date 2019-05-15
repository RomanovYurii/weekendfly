import {
    ENTERED_EMAIL,
    ENTERED_PASSWORD,
    LOGS_IN,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL,
    CREATION_FAILED,
    CREATION_SUCCESSFUL,
    RESET_ERROR,
    RESET_DATA,
} from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '',
    loading: false,
    error: '',
    user: null,
 };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ENTERED_EMAIL:
            return { ...state, email: action.payload };
        case ENTERED_PASSWORD:
            return { ...state, password: action.payload };
        case LOGS_IN:
            return { ...state, loading: true, error: '' };
        case LOGIN_FAILED:
            return { ...state, ...INITIAL_STATE, error: action.payload };
        case LOGIN_SUCCESSFUL:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case CREATION_FAILED:
            return { ...state, ...INITIAL_STATE, error: action.payload };
        case CREATION_SUCCESSFUL:
            return { ...state, ...INITIAL_STATE };
        case RESET_ERROR:
            return { ...state, error: action.payload };
        case RESET_DATA:
            return { ...state, password: '', email: '' };
        default:
            return state;
    }
};