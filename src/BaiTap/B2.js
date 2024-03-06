import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const B2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerlogo}>
          <Image
            style={styles.imagelogo}
            source={require('../../assets/image/logo.png')}
          />
          <Text style={styles.textlogo}>
            Audi<Text style={{fontWeight: 'normal'}}>Books.</Text>
          </Text>
        </View>
        <View style={styles.contaisetting}>
          <Image
            style={styles.imagesettings}
            source={require('../../assets/image/Setting.png')}
          />
        </View>
      </View>
      <View style={styles.conten}>
        <Text style={styles.textcategories}>Categories</Text>
        <Text style={styles.textseemore}>See more</Text>
      </View>
    </View>
  );
};

export default B2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5FCFF',
  },
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
    width: 40,
    height: 40,
    flexShrink: 0,
  },
  textlogo: {
    fontSize: 24,
    color: '#4B37D9',
    fontFamily: 'SF Pro Display',
    fontWeight: '700',
    marginLeft: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  headerlogo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: 117,
    height: 30,
  },
  imagesettings: {
    width: 30,
    height: 30,
    flexShrink: 0,
  },
  conten: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    flexShrink: 0,
    padding:24,
  },
  textcategories:{
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#010104',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textseemore:{
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#4838D1',
    fontStyle: 'normal',
    fontWeight: '500',
    textAlign:'right',
  }
});
