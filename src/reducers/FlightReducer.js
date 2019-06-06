import {
    UPDATE_FLIGHT,
} from '../actions/types';

const INITIAL_STATE = {
    depart: null,
    dest: null,
    budget: null,
    date: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_FLIGHT:
            return {...state, [action.payload.data]: action.payload.value};
        default:
            return state;
    }
};