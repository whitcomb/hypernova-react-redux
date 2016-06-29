import counterReducer from '../../Reducers/Counter';
import { createStore } from 'redux';

export default function configureStore(preloadedState) {
  const initialState = counterReducer(undefined, {});
  return createStore(
    counterReducer,
    Object.assign({}, initialState, preloadedState)
  );
}
