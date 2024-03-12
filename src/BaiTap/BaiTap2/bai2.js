import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {danhsach} from './Data';
import SectionView from './SectionView';

const bai2 = () => {
  return (
    <ScrollView key={bai2}>
      <View style={styles.container}>
        <SectionView title="Lịch Trình" data={danhsach}></SectionView>
        <SectionView title="Lịch Trình" data={danhsach}></SectionView>
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
});
