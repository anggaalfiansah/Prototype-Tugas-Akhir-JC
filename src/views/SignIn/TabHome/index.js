/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const TabHome = ({navigation}) => {
  const dataLogin = useSelector(state => state.login);
  const [User, setUser] = useState();
  const [Nama, setNama] = useState();

  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const config = {
    headers: {Authorization: dataLogin.token},
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `${url}/users/${dataLogin.userID}`,
        config,
      );
      console.log(response);
      await setUser(response.data.data);
      await setNama(response.data.data.Nama);
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
      <Text style={styles.title}>Welcome, {Nama}</Text>
      <View style={styles.buttonContainer}>
        <Button full rounded
          style={styles.button}
          onPress={() => navigation.navigate('FormKunjungan', User)}>
          <View>
            <Text style={styles.buttonText}>AJUKAN KUNJUNGAN</Text>
          </View>
        </Button>
        <Button full rounded
          style={styles.button}
          onPress={() => navigation.navigate('FormSkrining', User)}>
          <View>
            <Text style={styles.buttonText}>SKRINING MANDIRI COVID-19</Text>
          </View>
        </Button>
        <Button full rounded
          style={styles.button}
          onPress={() => navigation.navigate('HistoryScreen')}>
          <View>
            <Text style={styles.buttonText}>HISTORY</Text>
          </View>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default TabHome;
