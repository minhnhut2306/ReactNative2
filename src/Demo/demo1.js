import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Wrapper = ({
  barStyle,
  children,
  disableAvpoKeyboard,
  disableAvoiStatusBar,
  backgroundColor,
  style,
}) => {
  const {bottom} = useSafeAreaInsets();
  const bottomSafeArea = true;
  const paddingBottom = bottomSafeArea ? bottom : 0;

  return (
    <View style={[styles.wrapper, {backgroundColor}, style]}>
      <StatusBar hidden={disableAvoiStatusBar} barStyle={barStyle} />
      {children}
      <View
        style={[
          styles.padding,
          {height: paddingBottom, backgroundColor: 'rgba(255, 0, 0, 0.5)'},
        ]}
      />
    </View>
  );
};

const demo1 = () => {
  const {bottom, top} = useSafeAreaInsets();
  const bottomSafeArea = true;
  const paddingBottom = bottomSafeArea ? bottom : 0;
  const disableAvpoKeyboard = false;
  const barStyle = 'dark-content';
  const disableAvoiStatusBar = false;
  return (
    <Wrapper backgroundColor="blue" disableAvpoKeyboard={false}>
      <View style={[styles.container, {paddingBottom}]}>
        <Text style={styles.text}>Màn hình</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.flexfill}
        behavior="padding"
        enabled={!disableAvpoKeyboard}>
        <StatusBar
          barStyle={barStyle}
          translucent
          backgroundColor={'transparent'}>
          {!disableAvoiStatusBar && (
            <View style={[{height: top}, styles.StatusBar]}>
              <Text>Tôi là nguyễn minh nhựt đẹp trai nhất quận 12</Text>
            </View>
          )}
        </StatusBar>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};

export default demo1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    margin: 10,
    color: 'white',
  },
  padding: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  StatusBar: {
    backgroundColor: 'blue',
  },
});
