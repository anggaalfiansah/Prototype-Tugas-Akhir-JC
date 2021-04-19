/* eslint-disable prettier/prettier */
import axios from 'axios';
import {Button, Content, List, ListItem} from 'native-base';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector} from 'react-redux';
import styles from './styles';

const Historys = ({navigation}) => {
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
      console.log('refresh');
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.container}>
      <Text style={styles.title}>DAFTAR KUNJUNGAN</Text>
      <Content>
        <List>
          {History.map((item, key) => {
            return (
              <ListItem key={key} style={styles.listItemContainer}>
                <View style={styles.cardContainer}>
                  <Text style={styles.carStatus}>
                    Status        :{' '}
                    {item.Status
                      ? 'Approved'
                      : 'Silahkan Upload Bukti Test Covid-19'}
                  </Text>
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
                  <>
                    {item.Status ? null : (
                      <Button
                        rounded
                        style={styles.button}
                        onPress={() =>
                          navigation.navigate('FormUploadBukti', item._id)
                        }>
                        <Text style={styles.textButton}>Tambahkan Bukti</Text>
                      </Button>
                    )}
                  </>
                </View>
              </ListItem>
            );
          })}
        </List>
      </Content>
    </LinearGradient>
  );
};

export default Historys;
