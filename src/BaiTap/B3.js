import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const B3 = ({route}) => {
  // const {name, image} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerlogo}>
          <Image
            style={styles.imagelogo}
            source={require('../../assets/image/leftarrow.png')}
          />
          {/* <Text style={styles.textlogo}>{name}</Text> */}
          <Text style={styles.textlogo}>Sách 1</Text>
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 48}}>
        {/* <Image style={styles.imagesach} source={image} /> */}
        <Image style={styles.imagesach} source={require('../../assets/image/sach1.jpg')} />
      </View>
      <View>
        <View>
          <Text>Sách 1</Text>
        </View>
      </View>
    </View>
  );
};

export default B3;

const styles = StyleSheet.create({
  header: {
    width: 375,
    height: 50,
    display: 'flex',
    paddingTop: 46,
    paddingRight: 40,
    paddingBottom: 2,
    paddingLeft: 28,
    display: 'flex',
    justifyContent: 'space-between',
    gap: 130,
    flexShrink: 0,
    flexDirection: 'row',
  },
  imagelogo: {
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  textlogo: {
    width: 222,
    fontSize: 18,
    color: '#9292a2',
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginLeft: 16,
  },
  headerlogo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
  },
  imagesach: {
    width: 260,
    height: 260,
    flexShrink: 0,
  },
});
