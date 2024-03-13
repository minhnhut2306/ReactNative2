import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const bai3 = ({navigation}) => {
  // normal
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // error
  const [emailerror, setEmailError] = useState('');
  const [passworderror, setPasswordError] = useState('');

  const changeEmailTitle = data => {
    setEmail(data);
    setEmailError('');
  };

  const changePasswContent = data => {
    setPassword(data);
    setPasswordError('');
  };
  const addData = () => {
    if (email == '') {
      setEmailError('Vui lòng nhập tên đăng nhập');
    } else {
      setEmailError('');
    }
    if (password == '') {
      setPasswordError('Vui lòng nhập mật khẩu');
    } else {
      setPasswordError('');
    }
    if (email!= '' && password!= '') {
      alert('Đăng nhập thành công');
      navigation.navigate("bai1")
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputcontai}>
        <TextInput
         placeholder='Email'
          style={!!emailerror ? styles.inputError : styles.inputNormal}
          onChangeText={data => changeEmailTitle(data)}
        />
        {!!emailerror && <Text style={styles.errorText}>{emailerror}</Text>}
      </View>
      <View style={styles.inputcontai}>
        <TextInput 
          placeholder='Password'
          style={!!passworderror ? styles.inputError : styles.inputNormal}
          onChangeText={data => changePasswContent(data)}
        />
        {!!passworderror && <Text style={styles.errorText}>{passworderror}</Text>}
      </View>
      <TouchableOpacity style={styles.button} onPress={addData}>
        <Text style={styles.BtnText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

export default bai3;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  inputcontai: {
    width: '90%',
  },
  inputNormal: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  BtnText: {
    color: 'white',
    fontWeight: 'bold',
  },

});
