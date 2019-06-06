import {
    UPDATE_FLIGHT,
} from './types';

export const flightUpdate = ({data, value}) => {
    return {
        type: UPDATE_FLIGHT,
        payload: {data, value}
    };
};

