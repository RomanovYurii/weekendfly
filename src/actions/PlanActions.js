import {
  SELECTED_TICKETS,
  SELECTED_PREFERENCES,
  CLEAR_TRIP,
  DEF_HOME,
} from './types';

export const updateTrip = ({ tripData, ticketTo, ticketBack }) => {
  return {
      type: SELECTED_TICKETS,
      payload: { tripData, ticketTo, ticketBack }
  };
};

export const updatePreferences = (prefs) => {
  return {
    type: SELECTED_PREFERENCES,
    payload: prefs,
  }
};

export const updateHome = (value) => {
  return {
    type: DEF_HOME,
    payload: value,
  }
};

export const clearTrip = () => {
  return {
    type: CLEAR_TRIP,
    payload: null,
  }
};