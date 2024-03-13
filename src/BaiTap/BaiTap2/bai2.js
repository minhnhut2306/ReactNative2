import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {danhsach} from './Data';
import SectionView from './SectionView';

const bai2 = ({navigation}) => {
  const clickme = () => {
    navigation.navigate('bai3');
  };

  return (
    <ScrollView >
      <View style={styles.container}>
        <SectionView title="Lịch Trình" data={danhsach}></SectionView>
        <SectionView title="Lịch Trình" data={danhsach}></SectionView>
        <View style={styles.buttonbai}>
        <TouchableOpacity style={styles.button} onPress={clickme}>
          <Text>Chuyển qua bài 2</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

export default bai2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEEEEE',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
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
