import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {sach} from './Product';

const Book = () => {
  console.log(sach);
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={item.photo} />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.contai}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={sach}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    flexShrink: 0,
    marginLeft: 15,
  },
});

export default Book;
