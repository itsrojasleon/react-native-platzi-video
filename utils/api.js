const BASE_API = 'https://yts.am/api/v2';

class Api {
  async getSuggestion(id) {
    const response = await fetch(`${BASE_API}/movie_suggestions.json?movie_id=${id}`);
    const { data } = await response.json();
    return data.movies;
  }
  async getMovies() {
    const response = await fetch(`${BASE_API}/list_movies.json`);
    const { data } = await response.json();
    return data.movies;
  }
}
export default new Api();