/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Button} from 'native-base';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import storage from '../../../storage/storage';
import styles from './styles';
import axios from 'axios';

const TabProfil = ({navigation}) => {
  const dataLogin = useSelector(state => state.login);
  const [Nama, setNama] = useState();
  const [FotoProfil, setFotoProfil] = useState();

  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const config = {
    headers: {Authorization: dataLogin.token},
  };
  const dispatch = useDispatch();
  const logout = async () => {
    await storage.remove({key: 'loginState'});
    await dispatch({type: 'Logout'});
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${url}/users/${dataLogin.userID}`,
        config,
      );
      console.log(response);
      await setNama(response.data.data.Nama);
      await setFotoProfil(`${url}/${response.data.data.FotoProfil}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLogin]);

  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <View style={styles.profile}>
        <Image source={{uri: FotoProfil}} style={styles.fotoProfil} />
        <Text style={styles.namaProfil}>{Nama}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button full rounded danger style={styles.button} onPress={logout}>
          <Text style={styles.buttonText}>LOGOUT</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default TabProfil;
