import React from 'react';
import { Text, View } from 'react-native';

import API from './utils/api';

// Containers (Smart Components)
import Home from './containers/home';
import SuggestionList from './containers/suggestion-list';

// Components (Dumb components)
import Header from './components/header';

export default class App extends React.Component {
  state = {
    suggestionList: [],
  }
  async componentDidMount() {
    const suggestionList = await API.getSuggestion(10);
    this.setState(() => ({ suggestionList }));
  }
  render() {
    const { suggestionList } = this.state;
    return (
      <Home>
        <Header />
        <Text>Seeker</Text>
        <Text>Categories</Text>
        <SuggestionList
          list={suggestionList}
        />
      </Home>
    );
  }
}
