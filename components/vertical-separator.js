import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const VerticalSeparator = ({ color }) => {
  return (
    <View style={[
      styles.separator,
      {borderTopColor: color ? color : '#eaeaea'},
    ]}
    >
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  }
});

export default VerticalSeparator;