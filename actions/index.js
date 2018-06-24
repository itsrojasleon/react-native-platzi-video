import API from '../utils/api';

export const SET_SEGGESTION_LIST = 'SET_SEGGESTION_LIST';
export const SET_CATEGORIES_LIST = 'SET_CATEGORIES_LIST';
export const SET_SELECTED_MOVIE = 'SET_SELECTED_MOVIE';
export const CLOSE_MOVIE = 'CLOSE_MOVIE';

export const setSuggestionList = () => {
  return async (dispatch) => {
    const suggestions = await API.getSuggestion(10);
    dispatch({
      type: SET_SEGGESTION_LIST,
      suggestions,
    })
  }
}
export const setCategoryList = () => {
  return async (dispatch) => {
    const categories = await API.getMovies(10);
    dispatch({
      type: SET_CATEGORIES_LIST,
      categories,
    });
  }
}
export const setSelectedMovie = (movie) => ({
  type: SET_SELECTED_MOVIE,
  movie,
});
export const closeVideo  = () => ({
  type: CLOSE_MOVIE,
})
