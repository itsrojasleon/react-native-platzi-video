import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Video } from 'expo';
import Layout from '../components/layout-player';

class Player extends Component {
  state = {
    isLoaded: false,
    shouldPlay: true,
  }

  _handleVideoRef = component => {
    const _player = component;
  }
  // ALL THE PROPERTIES...
  // _onLoad = status => {
  //   console.log(status)
  // }
  _onLoad = ({ isLoaded }) => {
    this.setState(() => ({ isLoaded }));
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <Layout
        isLoaded={isLoaded}
        video={
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={this.state.shouldPlay}
            isLooping
            style={styles.video}
            ref={this._handleVideoRef}
            isBuffering={this._isBuffering}
            onLoad={this._onLoad}
          />
        }
        loader={
          <ActivityIndicator color="red" />
        }
      >
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player;