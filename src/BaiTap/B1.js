import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const B1 = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const clickme = () => {
    if (email.trim() === '' || password.trim() === '' || dob.trim() === '') {
      Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin');
      return;
    } else {
      Alert.alert('Thông báo', 'Đăng nhập thành công');
      navigation.navigate('B2');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contailogo}>
        <Image
          style={styles.imagelogo}
          source={require('../../assets/image/logo.png')}
        />
      </View>
      <View style={styles.contaitext}>
        <Text style={styles.textlogin}>Register</Text>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputtext}
            placeholder="Date of Birth"
            onChangeText={text => setDob(text)}
          />
        </View>
        <View style={styles.contaiby}>
          <Text style={styles.textby}>
            By signing up, you agree to our{' '}
            <Text style={{color: '#F77A55'}}>Terms</Text>,{' '}
            <Text style={{color: '#F77A55'}}>Data Policy</Text> and{' '}
            <Text style={{color: '#F77A55'}}>Cookies Policy</Text>.
          </Text>
        </View>
        <View style={styles.buttoncontai}>
          <TouchableOpacity onPress={clickme} style={styles.button}>
            <Text style={styles.textbutton}>Register</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttoncontaicanel}>
          <TouchableOpacity style={styles.buttoncanel}>
            <Text style={styles.textbutton2}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    with: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  contailogo: {
    width: '100%',
    height: 120,
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagelogo: {
    width: 120,
    height: '100%',
    flexShrink: 0,
  },
  contaitext: {
    marginTop: 24,
    padding: 40,
  },
  textlogin: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#2e2e5d',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  input: {
    width: 295,
    marginTop: 16,
    height: 53,
    alignItems: 'flex-start',
    gap: 12,
  },
  inputtext: {
    width: 295,
    height: 53,
    backgroundColor: '#B8B8C7',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  contaiby: {
    display: 'flex',
    paddingHorizontal: 8,
    paddingVertical: 0,
    gap: 10,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    marginTop: 16,
  },
  textby: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#2e2e5d',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  buttoncontai: {
    marginTop: 16,
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 23,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: 295,
    backgroundColor: '#4838D1',
    borderRadius: 8,
  },
  button: {
    width: 231,
    height: 24,
    backgroundColor: '#4838D1',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  buttoncontaicanel: {
    marginTop: 16,
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 23,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    width: 295,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#4838D1',
    borderWidth: 1,
  },
  buttoncanel: {
    width: 231,
    height: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  textbutton: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#ffffff',
    fontStyle: 'normal',
    fontWeight: '500',
  },
  textbutton2: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#4838D1',
    fontStyle: 'normal',
    fontWeight: '500',
  },
});
export default B1;
