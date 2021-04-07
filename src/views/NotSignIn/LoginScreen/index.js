/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, Input, Item} from 'native-base';
import {Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import storage from '../../../storage/storage';

const Login = ({navigation}) => {
  const [NIK, setNIK] = useState();
  const [Password, setPassword] = useState();
  const url = 'https://services-tugas-akhir-jc.herokuapp.com';

  const dispatch = useDispatch();
  const login = async () => {
    if (NIK.length < 16 && Password.length < 6) {
      Alert.alert('NIK/Password tidak sesuai');
    } else {
      try {
        const response = await axios.post(`${url}/users/login`, {
          NIK,
          Password,
        });
        console.log(response.data.user);
        console.log(response.data.token);
        await storage.save({key: 'loginState', data: response.data});
        dispatch({
          type: 'Login',
          token: response.data,
        });
      } catch (error) {
        console.log(error);
        Alert.alert('NIK/Password Salah');
      }
    }
  };
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>MASUK</Text>

        <Item regular style={styles.inputContainer}>
          <Input
            keyboardType="number-pad"
            placeholder="NIK"
            style={styles.input}
            onChangeText={nik => setNIK(nik)}
          />
        </Item>
        <Item regular style={styles.inputContainer}>
          <Input
            secureTextEntry
            placeholder="Password"
            style={styles.input}
            onChangeText={password => setPassword(password)}
          />
        </Item>
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} full rounded success onPress={login}>
          <Text>Masuk</Text>
        </Button>
        <Button
          style={styles.button}
          full
          rounded
          light
          onPress={() => navigation.goBack()}>
          <Text>Batal</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default Login;
