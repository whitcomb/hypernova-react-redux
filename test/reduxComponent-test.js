import * as actions from './components/Actions/Counter';
import * as types from './components/Constants/ActionTypes/Counter';
import reducer from './components/Reducers/Counter';
import { assert } from 'chai';

describe('React-Redux', () => {
  describe('Counter actions', () => {
    it('should create an action to increment counter', () => {
      const expectedAction = {
        type: types.INCREMENT_COUNTER,
      };
      assert.deepEqual(actions.incrementCounter(), expectedAction);
    });

    it('should create an action to decrement counter', () => {
      const expectedAction = {
        type: types.DECREMENT_COUNTER,
      };
      assert.deepEqual(actions.decrementCounter(), expectedAction);
    });
  });

  describe('Counter reducers', () => {
    it('should return the initial state', () => {
      assert.deepEqual(reducer(undefined, {}), { count: 0 });
    });

    it('should handle INCREMENT_COUNTER', () => {
      assert.deepEqual(
        reducer(undefined, { type: types.INCREMENT_COUNTER }),
        { count: 1 }
      );
    });

    it('should handle DECREMENT_COUNTER', () => {
      assert.deepEqual(
        reducer(undefined, { type: types.DECREMENT_COUNTER }),
        { count: -1 }
      );
    });
  });
});
