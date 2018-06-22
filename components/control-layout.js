import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

const ControlLayout = ({ playPause, controlsBelow, onPress, showControls }) => {
  return (
    <TouchableOpacity
      style={styles.superContainer}
      onPress={onPress}
    >
      {showControls && (
        <View style={styles.container}>
          {playPause}
          {controlsBelow}
        </View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  superContainer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    backgroundColor: 'rgba(0,0,0,.50)',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ControlLayout;