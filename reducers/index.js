import { combineReducers } from 'redux';

function reducer(state={}, action) {
  return state;
}

export default combineReducers({
  state: reducer,
});