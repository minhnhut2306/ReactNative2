import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Animation = ({navigation}) => {
  const clickme = () => {
    navigation.navigate('Amimation2');
  };
  const width = useSharedValue(1);
  function onPress() {
    width.value = withSequence(
      withTiming((width.value = 0), {duration: 1}),
      withSpring((width.value = 1), {damping: 2, stiffness: 250}),
    );
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: width.value}],
      backgroundColor: 'red',
    };
  });
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button style={styles.button} title="Press" onPress={onPress} />
      <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.btnbutton} onPress={clickme}>
          <Text style={styles.textbutton}>Chuyển bài 2</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default Animation;

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: '#b58df1',
    marginVertical: 20,
  },
  containerbutton: {
    marginTop: 50,
    width: '100%',
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnbutton: {
    width: '80%',
    height: '100%',
    backgroundColor: '#00FFCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
