import { combineReducers } from 'redux';
import { SET_SEGGESTION_LIST, SET_CATEGORIES_LIST } from '../actions';

function suggestions(state = [], action) {
  switch (action.type) {
    case SET_SEGGESTION_LIST:
      return action.suggestions;
    default:
      return state;
  }
}
function categories(state = [], action) {
  switch (action.type) {
    case SET_CATEGORIES_LIST:
      return action.categories;
    default:
      return state;
  }
}

export default combineReducers({
  suggestions,
  categories,
});
