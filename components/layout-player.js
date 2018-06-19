import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LayoutPlayer = ({ video, loader, isLoaded }) => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>
        {video}
      </View>
      {!isLoaded
        ? <View style={styles.overlay}>
            {loader}
          </View>
        : null
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LayoutPlayer;