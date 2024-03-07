import {StyleSheet, Text, View, Image,FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import {sach} from './Product';

const Book2 = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => { 
    const shuffledProducts = shuffleArray(sach);
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
  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.contaitong}>
          <View>
            <Image style={styles.image} source={item.photo} />
          </View>
          <View style={{marginLeft: 16}}>
            <Text style={styles.textlight}>{item.name}</Text>
            <Text style={styles.textlaurie}>Laurie Forest</Text>
            <View style={styles.contaistar}>
              <Image
                style={styles.star1}
                source={require('../../assets/image/star.png')}
              />
              <Image
                style={styles.star}
                source={require('../../assets/image/star.png')}
              />
              <Image
                style={styles.star}
                source={require('../../assets/image/star.png')}
              />
              <Image
                style={styles.star}
                source={require('../../assets/image/star.png')}
              />
              <Image
                style={styles.star}
                source={require('../../assets/image/star1.png')}
              />
            </View>
            <Text style={styles.textlaurie}>1,000+ Listeners</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
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

export default Book2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    
  },
  contaitong: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5FA',
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  textlight: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#010104',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textlaurie: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#6A6A8B',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  contaistar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingVertical: 10,
  },
  star: {
    width: 20,
    height: 20,
    marginLeft: 8,
  },
  star1: {
    width: 20,
    height: 20,
  },
});
