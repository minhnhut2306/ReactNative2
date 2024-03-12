import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {danhsach} from './Data';
import SectionView from './SectionView';

const bai2 = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SectionView title="Lịch Trình" data={danhsach}></SectionView>
        <SectionView title="Lịch Trình" data={danhsach}></SectionView>
      </ScrollView>
    </View>
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
