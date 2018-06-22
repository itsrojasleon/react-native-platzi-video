import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';

import { setSuggestionList, setCategoryList } from './actions';

// Containers (Smart Components)
import Home from './containers/home';
import SuggestionList from './containers/suggestion-list';
import CategoryList from './containers/category-list';
import Player from './containers/player';

// Components (Dumb components)
import Header from './components/header';

class Root extends Component {
  componentDidMount() {
    this.props.setCategoryList();
    this.props.setSuggestionList();
   }
  render() {
    return (
      <Home>
        <Header />
        <Text>Seeker</Text>
        <Text>Categories</Text>
        <Player />
        <CategoryList/>
        <SuggestionList/>
      </Home>
    );
  }
}
export default connect(null, { setSuggestionList, setCategoryList })(Root);
