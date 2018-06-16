import React from 'react';
import { Text, View } from 'react-native';

// Containers (Smart Components)
import Home from './containers/home';
import SuggestionList from './containers/suggestion-list';

// Components (Dumb components)
import Header from './components/header';

export default class App extends React.Component {
  render() {
    return (
      <Home>
        <Header />
        <Text>Seeker</Text>
        <Text>Categories</Text>
        <SuggestionList />
      </Home>
    );
  }
}
