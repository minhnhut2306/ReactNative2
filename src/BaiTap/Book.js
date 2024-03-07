import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {sach} from './Product';
import {useNavigation} from '@react-navigation/native';

const Book = () => {
  const navigation = useNavigation();
  const [randomProducts, setRandomProducts] = useState([]);
  const handlePress = item => {
    navigation.navigate('B3', {
      name: item.name,
      image: item.photo,
    });
  };

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
  console.log(sach);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => handlePress(item)}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={item.photo} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.contai}>
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
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 300,
    flexShrink: 0,
    marginLeft: 15,
  },
});

export default Book;
