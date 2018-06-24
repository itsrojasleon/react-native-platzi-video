import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSuggestionList, setCategoryList } from './actions';

// Containers (Smart Components)
import Home from './containers/home';
import Movie from './containers/movie';

import SuggestionList from './containers/suggestion-list';
import CategoryList from './containers/category-list';
import Player from './containers/player';
import Search from './containers/search';

// Components (Dumb components)
import Header from './components/header';

class Root extends Component {
  componentDidMount() {
    this.props.setCategoryList();
    this.props.setSuggestionList();
  }
  render() {
    if (this.props.movie) {
      return <Movie />
    }
    return (
      <Home>
        <Header />
        <Search />
        <CategoryList/>
        <SuggestionList/>
      </Home>
    );
  }
}
const mapStateToProps = ({ movie }) => ({ movie });

export default connect(mapStateToProps, { setSuggestionList, setCategoryList })(Root);
