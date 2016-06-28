import * as types from '../constants/ActionTypes';

export function incrementCounter() {
  return { type: types.INCREMENT_COUNTER };
}
export function decrementCounter() {
  return { type: types.DECREMENT_COUNTER };
}
