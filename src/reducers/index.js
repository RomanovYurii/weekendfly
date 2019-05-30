import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import FlightReducer from './FlightReducer';
import PlanReducer from './PlanReducer';

export default combineReducers({
    auth: AuthReducer,
    flightData: FlightReducer,
    planData: PlanReducer,
});