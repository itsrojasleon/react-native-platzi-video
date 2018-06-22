import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider,
  Platform,
  TouchableHighlight,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ControlsBelow = ({ fullScreen, durationMillis, positionMillis, onChange, value, onSliding, pressIn }) => {
  const [ durationMMSS, duration ] = durationMillis;
  const [positionMMSS] = positionMillis;
    return (
    <View style={styles.container}>
      <View style={styles.data}>
        <Text style={styles.time}>{positionMMSS}</Text>
        <View style={styles.left}>
          <Text style={
            [styles.time],
            {marginRight: 5, color: 'white'}
          }>{durationMMSS}</Text>
          <TouchableHighlight
            onPress={fullScreen}
            setOpacityTo={(.5), (1)}
            style={styles.button}
            underlayColor="rgba(0,0,0,.10)"
          >
            <MaterialIcons
              name="fullscreen"
              size={20}
              color="white"
            />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Slider
          maximumValue={duration}
          minimumValue={0}
          onValueChange={onChange}
          onSlidingComplete={onSliding}
          style={styles.slider}
          value={value}
          step={duration / 10000}
          maximumTrackTintColor="rgba(0,0,0,.40)"
          minimumTrackTintColor={
            Platform.OS === 'ios'
              ? 'white'
              : '#283593'
          }
          thumbTintColor="#1A237E"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 35 : 45,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    position: 'absolute',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  data: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
  },
  time: {
    color: 'white',
  },
  button: {
    transform: ([
      {scale: 1.2}
    ])
  },
  slider: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 50,
  },
  sliderContainer: {
    backgroundColor: 'transparent',
    height: 30,
    borderRadius: 50,
  },
});

export default ControlsBelow;