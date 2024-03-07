import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import {sach} from './Product';

const Book3 = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    const shuffledProducts = shuffleArray(sach);
    const numberOfRandomProducts = 5;
    const selectedRandomProducts = shuffledProducts.slice(
      0,
      numberOfRandomProducts,
    );
    setRandomProducts(selectedRandomProducts);
  }, []);

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={item.photo} />
        <Text style={styles.name}>{item.name} </Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={randomProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Book3;

const styles = StyleSheet.create({
  container: {
    width: 'auto',
    height: 'auto',
    marginLeft: 20,
  },
  avatar: {
    width: 160,
    height: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#9292A2',
    marginTop: 12,
  },
});
