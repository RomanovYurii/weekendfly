import {
    SELECTED_TICKETS,
    SELECTED_PREFERENCES,
    CLEAR_TRIP,
    DEF_HOME,
} from '../actions/types';

const INITIAL_STATE = {
    tripData: null,
    ticketTo: null,
    ticketBack: null,
    preferences: null,
    defaultLocation: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECTED_TICKETS:
            return {
                ...state,
                tripData: action.payload.tripData,
                ticketTo: action.payload.ticketTo,
                ticketBack: action.payload.ticketBack
            };
        case SELECTED_PREFERENCES:
            return {...state, preferences: action.payload};
        case CLEAR_TRIP:
            return {...state, INITIAL_STATE};
        case DEF_HOME:
            return {...state, defaultLocation: action.payload}
        default:
            return state;
    }
};