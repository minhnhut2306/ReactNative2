import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import {theloai} from './Product';

const Categories = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => { 
    const shuffledProducts = shuffleArray(theloai);
    const numberOfRandomProducts = 5;
    const selectedRandomProducts = shuffledProducts.slice(0, numberOfRandomProducts);
    setRandomProducts(selectedRandomProducts);
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
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
