import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-native';

import Header from '../components/header';
import Player from './player';
import MovieLayout from '../components/movie-layout';
import Details from '../components/details';
import Close from '../components/close';

import { setSelectedMovie } from '../actions';

class Movie extends Component {
  state = {
    opacity: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }
  _closeVideo = () => {
    this.props.setSelectedMovie(null);
  }
  render() {
    const { movie } = this.props;
    return (
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity,
        }}
      >
        <MovieLayout>
          <Header>
            <Close onPress={this._closeVideo} />
          </Header>
          <Player />
          <Details {...movie} />
        </MovieLayout>
      </Animated.View>
    );
  }
}

const mapStateToProps = ({ movie }) => ({ movie });

export default connect(mapStateToProps, { setSelectedMovie })(Movie);
