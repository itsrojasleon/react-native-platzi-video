import React from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';

const LayoutCategories = ({ title, children }) => (
  <ImageBackground
    style={styles.container}
    source={require('../assets/background.png')}
  >
    <Text style={styles.title}>{title}</Text>
    <View>{children}</View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: '#000000',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  }
});

export default LayoutCategories;