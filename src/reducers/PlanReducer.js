import {
  SELECTED_TICKETS,
  SELECTED_PREFERENCES
} from '../actions/types';

const INITIAL_STATE = {
  tripData: null,
  ticketTo: null,
  ticketBack: null,
  preferences: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case SELECTED_TICKETS:
          console.log("received following payload");
          console.log(action.payload);
          return { ...state, tripData: action.payload.tripData, ticketTo: action.payload.ticketTo, ticketBack: action.payload.ticketBack };
      case SELECTED_PREFERENCES:
          return { ...state, preferences: action.payload };
      default:
          return state;
  }
};