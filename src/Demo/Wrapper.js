import { StyleSheet, View, StatusBar } from 'react-native';
import React from 'react';

const Wrapper = ({ backgroundColor, barStyle, children }) => {
  return (
    <View style={[styles.wrapper, { backgroundColor }]}>
      <StatusBar barStyle={barStyle} />
      {children}
    </View>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },
});
