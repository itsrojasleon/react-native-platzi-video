import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header';
import Player from './player';
import MovieLayout from '../components/movie-layout';
import Details from '../components/details';
import Close from '../components/close';

import { setSelectedMovie } from '../actions';

class Movie extends Component {
  _closeVideo = () => {
    this.props.setSelectedMovie(null);
  }
  render() {
    const { movie } = this.props;
    return (
      <MovieLayout>
        <Header>
          <Close onPress={this._closeVideo} />
        </Header>
        <Player />
        <Details {...movie} />
      </MovieLayout>
    );
  }
}

const mapStateToProps = ({ movie }) => ({ movie });

export default connect(mapStateToProps, { setSelectedMovie })(Movie);
