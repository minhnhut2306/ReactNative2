import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Custom from './CostomHeader';

const Bai1 = ({ navigation }) => {
  const clickme = () => {
    navigation.navigate('bai2');
  };

  return (
    <View style={styles.container}>
      <Custom
        leftIcon={require('../../../assets/image/left-arrow.png')}
        title={'Header'}
        rightIcon={require('../../../assets/image/nhut.png')}
      />
      <View style={styles.separator} />
      <Custom
        leftIcon={require('../../../assets/image/left-arrow.png')}
        title={'Header'}
      />
      <View style={styles.separator} />
      <Custom leftIcon={require('../../../assets/image/left-arrow.png')} />
      <View style={styles.separator} />
      <Custom
        leftIcon={require('../../../assets/image/left-arrow.png')}
        rightIcon={require('../../../assets/image/nhut.png')}
      />
      <View style={styles.separator} />
      <Custom rightIcon={require('../../../assets/image/nhut.png')} />
      <View style={styles.separator} />
      <Custom
        title={'Header'}
        rightIcon={require('../../../assets/image/nhut.png')}
      />
      <View style={styles.separator} />
      <Custom title={'Header'} />
      <View style={styles.buttonbai}>
        <TouchableOpacity style={styles.button} onPress={clickme}>
          <Text>Chuyển qua bài 2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#DDDDDD',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
  button: {
    width: 300,
    height: 40,
    backgroundColor: '#00FFCC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonbai: {
    width: '100%',
    height: 40,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
