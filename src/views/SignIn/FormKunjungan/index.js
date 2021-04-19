/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Item,
  Content,
  Container,
  Textarea,
} from 'native-base';
import {Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import axios from 'axios';

const FormKunjungan = ({route, navigation}) => {
  const Data = route.params;
  console.log(Data);
  const [TanggalKunjungan, setTanggalKunjungan] = useState();
  const [Keterangan, setKeterangan] = useState();
  const url = 'https://services-tugas-akhir-jc.herokuapp.com';

  const ajukan = async () => {
    const time = new Date(TanggalKunjungan);
    const Tanggal = ('0' + time.getDate()).slice(-2);
    const bulan = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const Bulan = bulan[time.getMonth()];
    const Tahun = time.getFullYear();
    const data = {
      UserID: Data.UserID,
      Nama: Data.Nama,
      ScoreSkrining: Data.Score,
      HasilSkrining : Data.HasilTest,
      Tanggal,
      Bulan,
      Tahun,
      Keterangan,
    };
    console.log(data);
    try {
      const kunjungan = await axios.post(`${url}/attendance/`, data);
      console.log(kunjungan);
      Alert.alert(kunjungan.data.message);
      navigation.navigate('FormUploadBukti', kunjungan.data.data._id);
    } catch (err) {
      console.log(err.message);
      Alert.alert(err.message);
    }
  };
  return (
    <Container>
      <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.background}>
        <Text style={styles.title}>FORM KUNJUNGAN</Text>
        <Content>
          <View style={styles.container}>
            <View style={styles.form}>
              <Item regular style={styles.inputContainer}>
                <DatePicker
                  style={styles.dateInput}
                  date={TanggalKunjungan}
                  mode="date"
                  placeholder="Tanggal Kunjungan"
                  format="YYYY-MM-DD"
                  minDate={new Date()}
                  maxDate="2100-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={date => {
                    setTanggalKunjungan(date);
                  }}
                  customStyles={{
                    dateInput: {
                      borderColor: 'rgba(0,0,0,0)',
                    },
                    dateText: {
                      paddingHorizontal: 10,
                      alignSelf: 'flex-start',
                      fontFamily: 'System',
                      fontSize: 17,
                      color: '#575757',
                    },
                    placeholderText: {
                      paddingHorizontal: 10,
                      alignSelf: 'flex-start',
                      fontFamily: 'System',
                      fontSize: 17,
                      color: '#575757',
                    },
                  }}
                />
              </Item>
              <Item regular style={styles.textAreaContainer}>
                <Textarea
                  rowSpan={5}
                  placeholder="Keperluan"
                  style={styles.textArea}
                  value={Keterangan}
                  onChangeText={keterangan => setKeterangan(keterangan)}
                />
              </Item>
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded style={styles.button} onPress={ajukan}>
                <Text>Ajukan</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded style={styles.button2} onPress={() => navigation.goBack()}>
                <Text>Batal</Text>
              </Button>
            </View>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default FormKunjungan;
