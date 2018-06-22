import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Video } from 'expo';
import Layout from '../components/player-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import ControlsBelow from '../components/controls-below';

import { _getMMSSFromMillis } from '../utils/helpers';

class Player extends Component {
  state = {
    isLoaded: false,
    shouldPlay: false,
    durationMillis: null,
    positionMillis: 0,
    valueSlider: 0,
    value: 0,
    showControls: false,
  }
  _handleVideoRef = component => this._player = component

  _onLoad = ({ isLoaded, durationMillis }) => {
    this.setState(() => ({ isLoaded, durationMillis }));
  }
  _playPause = () => {
    if (this.state.showControls && this.state.shouldPlay) {
      console.log('Click again to hide')
    }else {
      this.timer = setTimeout(() => {
        this.setState({ showControls: false });
      }, 2000);
    }
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay,
      value: prevState.valueSlider,
    }));
  }
  _fullScreen = () => {
    try {
      this._player.presentFullscreenPlayer();
    }catch(error) {
      console.log('Upsss', error);
    }
  }
  _onPlaybackStatusUpdate = ({ positionMillis, durationMillis }) => {
    if (positionMillis && durationMillis) {
      this.setState(() => ({ positionMillis }));
      this._onChange(this.state.positionMillis);
    }else return;
    if (!this.state.shouldPlay && this.state.showControls) {
      clearTimeout(this.timer);
      this.setState({showControls: true})
    }
  }
  _restart = () => {
    this._player.replayAsync();
  }
  _onError = (e) => {
    throw new Error("Isn't loading ", e)
  }

  _onChange = (value) => {
    this.setState(() => ({
      valueSlider: value,
    }));
  }
  _onSliding = (e) => {
    this.setState((prevState) => ({
      value: prevState.valueSlider
    }));
    this._player.setPositionAsync(this.state.valueSlider);
  }
  _onPress = () => {
    if (!this.state.showControls && this.state.shouldPlay) {
      this.timer = setTimeout(() => {
        this.setState({showControls: false})
      }, 2000)
    }
    // It's not showing
    if (!this.state.showControls) this.setState({ showControls: true });
    // It's Showing
    else this.setState({ showControls: false });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const {
      isLoaded,
      shouldPlay,
      durationMillis,
      positionMillis,
      valueSlider,
      value,
      showControls,
    } = this.state;
    let retry = false;
    if (positionMillis === durationMillis) {
      retry = true;
    }
    return (
      <Layout
        isLoaded={isLoaded}
        video={
          <Video
            source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay={shouldPlay}
            style={styles.video}
            ref={this._handleVideoRef}
            onLoad={this._onLoad}
            onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
            onError={this._onError}
          />
        }
        loader={
          <ActivityIndicator size="large" color="white" />
        }
        controls={
          <ControlLayout
            onPress={this._onPress}
            showControls={showControls}
            playPause={
              <PlayPause
                playPause={this._playPause}
                paused={shouldPlay}
                retry={retry}
                restart={this._restart}
              />
            }
            controlsBelow={
              <ControlsBelow
                fullScreen={this._fullScreen}
                durationMillis={[_getMMSSFromMillis(durationMillis), durationMillis]}
                positionMillis={[_getMMSSFromMillis(positionMillis)]}
                onChange={this._onChange}
                onSliding={this._onSliding}
                value={valueSlider}
              />
            }
          />
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