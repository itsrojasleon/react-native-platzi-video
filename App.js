import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

import API from './utils/api';

// Containers (Smart Components)
import Home from './containers/home';
import SuggestionList from './containers/suggestion-list';
import CategoryList from './containers/category-list';
import Player from './containers/player';

// Components (Dumb components)
import Header from './components/header';

export default class App extends React.Component {
  state = {
    suggestionList: [],
    categories: [],
  }
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    const categories = await API.getMovies(10);
    this.setState(() => ({
      suggestionList,
      categories,
    }));
  }
  render() {
    const {
      suggestionList,
      categories,
    } = this.state;
    return (
      <Provider store={store}>
        <Home>
          <Header />
          <Text>Seeker</Text>
          <Text>Categories</Text>
          <Player />
          <CategoryList
            list={categories}
          />
          <SuggestionList
            list={suggestionList}
          />
        </Home>
      </Provider>
    );
  }
}
