import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Video } from 'expo';
import VideoPlayer from '@expo/videoplayer';

class Player extends Component {
  render() {
    return (
      <VideoPlayer
        videoProps={{
          shouldPlay: true,
          resizeMode: Video.RESIZE_MODE_CONTAIN,
          source: {
            uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          },
        }}
        isPortrait={true}
        playFromPositionMillis={0}
      />
    );
  }
}
export default Player;