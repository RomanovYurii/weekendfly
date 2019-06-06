import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    ENTERED_EMAIL,
    ENTERED_PASSWORD,
    LOGS_IN,
    LOGS_OUT,
    LOGIN_FAILED,
    LOGIN_SUCCESSFUL,
    CREATION_SUCCESSFUL,
    CREATION_FAILED,
    RESET_ERROR,
    RESET_DATA,
} from './types';

export const logoutUser = () => {
    return {
        type: LOGS_OUT,
    }
} 

export const changeEmail = (text) => {
    return {
        type: ENTERED_EMAIL,
        payload: text
    };
};

export const changePassword = (text) => {
    return {
        type: ENTERED_PASSWORD,
        payload: text
    };
};

export const resetError = () => {
    return {
        type: RESET_ERROR,
        payload: ''
    };
};

export const resetData = () => {
    return {
        type: RESET_DATA,
    };
};

export const createUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGS_IN });

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => { createUserSuccess(dispatch); })
            .catch((error) => createUserFail(dispatch, error.message));
    };
};

export const resetPassword = (email) => {
    return (dispatch) => {
        firebase.auth().sendPasswordResetEmail(email)
            .then( () => { createUserSuccess(dispatch); } )
            .catch( (error) => { createUserFail(dispatch, error.message); } ) 
    };
}

export const tryLogin = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGS_IN });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => { loginUserSuccess(dispatch, user.user.uid); })
            .catch((error) => loginUserFail(dispatch, error.message));
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESSFUL, payload: user
    });

    Actions.plan();
};

const createUserSuccess = (dispatch) => {
    firebase.database().ref('/preferences/' + firebase.auth().currentUser.uid).set({
        sight: false,
        museum: false,
        tour: false,
        art: false,
        food: false,
        history: false,
        outdoor: false,
        shop: false,
        theater: false,
        defaultLocation: false
    })
    .then(() => { dispatch({ type: CREATION_SUCCESSFUL }); Actions.welcome(); });
};

const createUserFail = (dispatch, msg) => {
    dispatch({ type: CREATION_FAILED, payload: msg });
};

const loginUserFail = (dispatch, msg) => {
    dispatch({ type: LOGIN_FAILED, payload: msg });
};