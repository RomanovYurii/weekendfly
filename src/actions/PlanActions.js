import {
  SELECTED_TICKETS,
} from './types';

export const updateTrip = (data) => {
  return {
      type: SELECTED_TICKETS,
      payload: data
  };
};