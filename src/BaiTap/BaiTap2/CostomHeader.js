import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const CustomHeader = ({leftIcon, title, rightIcon}) => {
  let renderLeftIcon, renderTitle, renderRightIcon;

  if (leftIcon) {
    renderLeftIcon = <Image source={leftIcon} style={styles.sizeIcon} />;
  } else {
    renderLeftIcon = <View style={styles.placeholder} />;
  }
  if (title) {
    renderTitle = <Text style={styles.text}>{title}</Text>;
  } else {
    renderTitle = <Text style={styles.placeholdertitle} />;
  }

  if (rightIcon) {
    renderRightIcon = <Image source={rightIcon} style={styles.sizeIcon} />;
  } else {
    renderRightIcon = <View style={styles.placeholder} />;
  }

  return (
    <View style={styles.container}>
      {renderLeftIcon}
      {renderTitle}
      {renderRightIcon}
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  sizeIcon: {
    width: 20,
    height: 20,
  },
  text: {
    flex: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    textAlign: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    flex: 0,
    width: 20,
    height: 20,
  },
  placeholdertitle: {
    flex: 10,
    width: 20,
    height: 20,
  },
});
