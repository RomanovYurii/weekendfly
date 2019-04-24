import {
    UPDATE_FLIGHT,
} from './types';

export const flightUpdate = ({ data, value }) => {
    console.log(data);
    console.log(value);
    return {
        type: UPDATE_FLIGHT,
        payload: { data, value }
    };
};

