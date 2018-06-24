import { combineReducers } from 'redux';
import {
  SET_SEGGESTION_LIST,
  SET_CATEGORIES_LIST,
  SET_SELECTED_MOVIE,
  CLOSE_MOVIE,
} from '../actions';

function suggestions(state = [], action) {
  if (action.type === SET_SEGGESTION_LIST) {
    return action.suggestions;
  }else return state;
}
function categories(state = [], action) {
  if (action.type === SET_CATEGORIES_LIST) {
    return action.categories;
  }else return state;
}
function movie(state = [], action) {
  if (action.type === SET_SELECTED_MOVIE) {
    return action.movie;
  }else return state;
}

export default combineReducers({
  suggestions,
  categories,
  movie,
});
