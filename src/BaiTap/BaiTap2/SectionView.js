import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SectionView = ({title, data}) => {
  return (
    <View >
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {RenderItem(data)}
      </ScrollView>
    </View>
  );
};

const RenderItem = data => {
  return data.map((item, index) => (
    <View key={index} style={styles.conten}>
      <Text style={styles.textbold}>Địa điểm</Text>
      <Text style={styles.text}>{item.address}</Text>
      <Text style={styles.textbold}>Thời gian</Text>
      <Text style={styles.text}>{item.opentime}</Text>
      <Text style={styles.textbold}>Phương tiện di chuyển </Text>
      <Text style={styles.text}>{item.transport}</Text>
      <Text style={styles.textbold}>Thời gian</Text>
      <Text style={styles.text}>{item.time}</Text>
      <Text style={styles.textbold}>Hình ảnh</Text>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Image style={styles.image} source={item.image} />
      </View>
    </View>
  ));
};

export default SectionView;

const styles = StyleSheet.create({
  sectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conten: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 20,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },

  textbold: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    marginTop: 5,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 14,
    color: 'black',
    marginTop: 5,
  },
  image: {
    width: 300,
    height: 150,
    marginTop:5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    margin: 10,
  },
});
