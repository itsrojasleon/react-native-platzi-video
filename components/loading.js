import React from 'react';
import { View, Text, Image, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = (props) => {
  return (
    <View>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <ActivityIndicator />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
    width: 200,
    height: 80,
    resizeMode: 'contain',
  }
});

export default Loading;