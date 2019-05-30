import {
  SELECTED_TICKETS,
} from '../actions/types';

const INITIAL_STATE = {
  trip: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case SELECTED_TICKETS:
          return { ...state, trip: action.payload };
      default:
          return state;
  }
};