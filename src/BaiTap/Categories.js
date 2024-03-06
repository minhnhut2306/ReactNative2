import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import {theloai} from './product';

const Categories = () => {
  const renderItem = ({item, index}) => {
    return (
      <View>
        <View style={styles.categories}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={theloai}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  categories: {
    height: 'auto',
    width: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#F5F5FA',
    backgroundColor: '#9292A2',
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
