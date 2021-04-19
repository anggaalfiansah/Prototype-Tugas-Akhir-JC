/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Container, Content, List, ListItem} from 'native-base';
import axios from 'axios';

const HistoryKunjungan = () => {
  const dataLogin = useSelector(state => state.login);
  const [History, setHistory] = useState([]);
  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const config = {
    headers: {Authorization: dataLogin.token},
  };

  const getHistory = async () => {
    const response = await axios.get(
      `${url}/users/attendance/${dataLogin.userID}`,
      config,
    );
    await setHistory(
      response.data.data.sort((a, b) => {
        if (a.Tanggal > b.Tanggal) {
          return -1;
        }
        if (a.Tanggal < b.Tanggal) {
          return 1;
        }
        return 0;
      }),
    );
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      await getHistory();
      console.log('Logs every minute');
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.container}>
        <Text style={styles.title}>HISTORY KUNJUNGAN</Text>
        <Content>
          <List>
            {History.map((item, key) => {
              return (
                <ListItem key={key} style={styles.listItemContainer}>
                  <View style={styles.cardContainer}>
                    <Text style={styles.cardCheck}>
                      Check In    : {item.CheckIn ? item.CheckIn : '-'}
                    </Text>
                    <Text style={styles.cardCheck}>
                      Check Out : {item.CheckOut ? item.CheckOut : '-'}
                    </Text>
                    <Text style={styles.cardKeterangan}>
                      Keperluan  : {item.Keterangan}
                    </Text>
                    <Text style={styles.cardTanggal}>
                      {`${item.Tanggal}-${item.Bulan}-${item.Tahun}`}
                    </Text>
                  </View>
                </ListItem>
              );
            })}
          </List>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default HistoryKunjungan;
