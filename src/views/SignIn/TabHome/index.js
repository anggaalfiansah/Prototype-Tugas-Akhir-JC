/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Button, Spinner} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import axios from 'axios';
import { Image } from 'react-native';

const TabHome = ({navigation}) => {
  const dataLogin = useSelector(state => state.login);
  const [User, setUser] = useState();
  const [Nama, setNama] = useState();
  const [Loading, setLoading] = useState(false);

  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const config = {
    headers: {Authorization: dataLogin.token},
  };

  const getUserData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${url}/users/${dataLogin.userID}`,
        config,
      );
      console.log(response);
      await setUser(response.data.data);
      await setNama(response.data.data.Nama);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataLogin]);

  return (
    <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.container}>
      {Loading ? (
        <View style={styles.loading}>
          <Spinner color="blue" />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Selamat datang, {Nama}</Text>
          <Image style={styles.gambar} source={require('./face-reco.png')} />
          <View style={styles.buttonContainer}>
            <Button
              full
              rounded
              style={styles.button}
              onPress={() => navigation.navigate('FormSkrining', User)}>
              <View>
                <Text style={styles.buttonText}>AJUKAN KUNJUNGAN</Text>
              </View>
            </Button>
            <Button
              full
              rounded
              style={styles.button}
              onPress={() => navigation.navigate('HistoryScreen')}>
              <View>
                <Text style={styles.buttonText}>DAFTAR KUNJUNGAN</Text>
              </View>
            </Button>
          </View>
        </>
      )}
    </LinearGradient>
  );
};

export default TabHome;
