/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const TabHome = ({navigation}) => {
  const data = useSelector(state => state.login);
  const [User, setUser] = useState();
  const [Nama, setNama] = useState();

  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const config = {
    headers: {Authorization: data.token},
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(`${url}/users/${data.userID}`, config);
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
  }, [data]);
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <Text style={styles.title}>Welcome, {Nama}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('FormKunjungan', User)}>
        <View>
          <Text style={styles.buttonText}>AJUKAN KUNJUNGAN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <View>
          <Text style={styles.buttonText}>SKRINING MANDIRI COVID-19</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <View>
          <Text style={styles.buttonText}>HISTORY</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TabHome;
