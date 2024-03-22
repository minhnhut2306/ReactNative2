import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

const Bai2 = ({navigation}) => {
  const clickme = () => {
    navigation.navigate('Bai3');
  };
  const commonOptions = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
  };
  const libraryOptions = {
    seletLimit: 10,
    ...commonOptions,
  };
  const [image, setImage] = useState();
  const onOpenLibrary = async () => {
    const response = await launchImageLibrary(libraryOptions);
    if (response?.assets) {
      setImage(response.assets);
    } else {
      Alert.alert('Có lỗi xảy ra', response.errorMessage);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerbutton}>
        <TouchableOpacity style={styles.btnbutton} onPress={onOpenLibrary}>
          <Text style={styles.textbutton}>Chọn ảnh</Text>
        </TouchableOpacity>
        <Image
          source={{
            uri:
              image?.[0]?.uri ||
              'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/429668118_366090556262683_900035539745474649_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=U9ofI1ii538AX-SsWoc&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfCwyQ6neqixvtlXGqgKOBBZt86Lis_fthePjhln1SW4Eg&oe=660000EE',
          }}
          style={styles.avatar}
        />
        <View style={styles.containerbuttonchuyen}>
          <TouchableOpacity style={styles.btnbutton} onPress={clickme}>
            <Text style={styles.textbutton}>Chuyển bài 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bai2;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  containerbutton: {
    marginTop: 50,
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnbutton: {
    width: '80%',
    height: '100%',
    backgroundColor: '#00FFCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  avatar: {
    width: 200,
    height: 300,
    marginTop: 20,
  },
  containerbuttonchuyen: {
    marginTop: 50,
    width: '100%',
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnbutton: {
    width: '80%',
    height: '100%',
    backgroundColor: '#00FFCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
