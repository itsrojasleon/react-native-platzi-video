import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const PlayPause = ({ playPause, paused }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={playPause}
        style={styles.container}
        underlayColor="red"
        hitSlop={{
          left: 5,
          top: 5,
          bottom: 5,
          right: 5,
        }}
      >
      {!paused
        ? <Text style={styles.button}>Play</Text>
        : <Text style={styles.button}>Pause</Text>
      }
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  contaiener:{
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray',
  },
  button: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  }
});

export default PlayPause;