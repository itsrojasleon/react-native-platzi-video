import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LayoutSuggestions = ({ title, children }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View>{children}</View>
  </View>
);
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8
  }
});

export default LayoutSuggestions;
