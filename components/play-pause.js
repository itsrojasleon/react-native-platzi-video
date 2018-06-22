import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const PlayPause = ({ playPause, paused, retry, restart }) => {
  return (
    <View>
      <View>
        <TouchableHighlight
          onPress={playPause}
          style={styles.container}
          underlayColor="transparent"
          hitSlop={{
            left: 5,
            top: 5,
            bottom: 5,
            right: 5,
          }}
        >
          <View>
            {!paused && (
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-play' : 'md-play'}
                size={60}
                color="white"
              />
            )}
            {paused && !retry && (
              <Ionicons
                name={Platform.OS === 'ios' ? 'ios-pause' : 'md-pause'}
                size={60}
                color="white"
              />
            )}
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={restart}
          underlayColor="transparent"
          hitSlop={{
            left: 5,
            top: 5,
            bottom: 5,
            right: 5,
          }}
        >
          <View>
            {retry && <MaterialIcons name="replay" size={60} color="white" />}
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default PlayPause;