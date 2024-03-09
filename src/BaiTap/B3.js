import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const B3 = ({route}) => {
  const {name, image} = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerlogo}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.imagelogo}
              source={require('../../assets/image/leftarrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.textlogo}>{name}</Text>
          {/* <Text style={styles.textlogo}>Sách 1</Text> */}
        </View>
      </View>
      <View style={{alignItems: 'center', marginTop: 48}}>
        <Image style={styles.imagesach} source={image} />
        {/* <Image
          style={styles.imagesach}
          source={require('../../assets/image/sach1.jpg')}
        /> */}
      </View>
      <View style={styles.contai1}>
        <View>
          <Text style={styles.namebook}>{name}</Text>
          <Text style={styles.textauthor}>J.K Rowling</Text>
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
            <Text style={styles.textstar}>4.0</Text>
          </View>
          <View style={styles.contaistar}>
            <TouchableOpacity style={styles.buttoncategory}>
              <Text>Fantasy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncategory2}>
              <Text>Fantasy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncategory2}>
              <Text>Fantasy</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contaistar}>
            <TouchableOpacity style={styles.buttonplay}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.imageplay}
                  source={require('../../assets/image/play.png')}
                />
                <Text style={styles.textplay}>Play Audio</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttondocument}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  style={styles.imagedoc}
                  source={require('../../assets/image/document.png')}
                />
                <Text style={styles.textdoc}>Read Book</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.sum}>Summary</Text>
        <Text style={styles.amet}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia
        </Text>
      </View>
    </View>
  );
};

export default B3;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
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
  contai1: {
    marginLeft: 40,
    marginTop: 28,
  },
  namebook: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#010104',
  },
  textauthor: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#9292a2',
    fontStyle: 'normal',
    fontWeight: '400',
  },
  contaistar: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 32,
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
  textstar: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#9292a2',
    fontStyle: 'normal',
    fontWeight: '400',
    marginLeft: 8,
  },
  buttoncategory: {
    width: 'auto',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttoncategory2: {
    width: 'auto',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 12,
  },
  buttonplay: {
    width: 124,
    height: 45,
    backgroundColor: '#4838D1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 12,
  },
  imageplay: {
    width: 16,
    height: 16,
    marginRight: 12,
  },
  textplay: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#fff',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  buttondocument: {
    width: 124,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 15,
  },
  imagedoc: {
    width: 16,
    height: 16,
    marginRight: 12,
    color: '#4838d1',
  },
  textdoc: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#4838d1',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  sum: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#9292A2',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  amet: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#6a6a8e',
    fontStyle: 'normal',
    fontWeight: '300',
    marginTop: 12,
  }
});
