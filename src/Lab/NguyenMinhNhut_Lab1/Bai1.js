import { View, Pressable, Image, Text } from 'react-native';
import React from 'react';

const Bai1 = ({ iconLeft, onPressLeft, leftIconSize, iconLeftColor, renderLeftColor, centerComponent, title, numberOfLines }) => {
  const RenderLeft = () => {
    return (
      <View style={styles.renderleft}>
        {iconLeft ? (
          <Pressable hitSlop={15} onPress={onPressLeft}>
            <Image source={iconLeft} style={{ tintColor: iconLeftColor }} />
          </Pressable>
        ) : (
          <View
            style={{
              width: leftIconSize,
              height: leftIconSize,
              backgroundColor: renderLeftColor,
            }}
          />
        )}
      </View>
    );
  };

  const RenderCenter = () => {
    return (
      centerComponent || (
        <View style={styles.containerCenter}>
          <Text style={styles.title} numberOfLines={numberOfLines}>
            {title}
          </Text>
        </View>
      )
    );
  };

  return (
    <View style={styles.container}>
      <RenderLeft />
      <RenderCenter />
    </View>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  renderleft: {
    width: 200,
    height: 150,
    backgroundColor: '#0000FF',
  },
  containerCenter: {
    width: 200,
    height: 150,
    backgroundColor: "#FF00FF",
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
};

export default Bai1;
