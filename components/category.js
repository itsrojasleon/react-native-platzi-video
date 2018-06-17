import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Category = ({ genres, background_image }) => {
  return (
    <ImageBackground
      source={{
        uri: background_image
      }}
      style={styles.container}
    >
      <Text style={styles.genre}>{genres[0]}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 0,
    elevation: 8,
  }
});

export default Category;