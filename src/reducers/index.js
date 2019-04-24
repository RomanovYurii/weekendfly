import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FlightReducer from './FlightReducer';

export default combineReducers({
    auth: AuthReducer,
    flightData: FlightReducer,
});