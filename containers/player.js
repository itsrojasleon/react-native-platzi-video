import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Video } from 'expo';
import Layout from '../components/player-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';

class Player extends Component {
  state = {
    isLoaded: false,
    shouldPlay: false,
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
  _playPause = () => {
    this.setState((prevState) => ({ shouldPlay: !prevState.shouldPlay }))
  }

  render() {
    const { isLoaded, shouldPlay } = this.state;
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
            shouldPlay={shouldPlay}
            // isLooping
            style={styles.video}
            ref={this._handleVideoRef}
            isBuffering={this._isBuffering}
            onLoad={this._onLoad}
          />
        }
        loader={
          <ActivityIndicator size="large" color="red" />
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <Text>progress bar | </Text>
            <Text>time left | </Text>
            <Text>fullscreen | </Text>
          </ControlLayout>
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