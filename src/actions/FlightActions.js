import {
    UPDATE_FLIGHT,
    CLEAR_FLIGHT,
} from './types';

export const flightUpdate = ({data, value}) => {
    return {
        type: UPDATE_FLIGHT,
        payload: {data, value}
    };
};

export const clearFlight = (defaultLocation) => {
    return {
        type: CLEAR_FLIGHT,
        payload: defaultLocation? defaultLocation: '',
    }
}

