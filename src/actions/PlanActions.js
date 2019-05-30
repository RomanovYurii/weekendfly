import {
  SELECTED_TICKETS,
  SELECTED_PREFERENCES,
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