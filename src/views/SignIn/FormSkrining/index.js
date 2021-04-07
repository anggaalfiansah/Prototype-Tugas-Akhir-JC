/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, Content, Container, List} from 'native-base';
import {Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import axios from 'axios';
import RadioForm from 'react-native-simple-radio-button';

const FormSkrining = ({route, navigation}) => {
  const User = route.params;
  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const radio1 = [
    {label: 'YA', value: 1},
    {label: 'TIDAK', value: 0},
  ];
  const radio2 = [
    {label: 'YA', value: 5},
    {label: 'TIDAK', value: 0},
  ];
  const [Score1, setScore1] = useState(null);
  const [Score2, setScore2] = useState(null);
  const [Score3, setScore3] = useState(null);
  const [Score4, setScore4] = useState(null);
  const [Score5, setScore5] = useState(null);
  const [Score6, setScore6] = useState(null);
  const [Score7, setScore7] = useState(null);

  const getScore = () => {
    if (
      Score1 == null ||
      Score2 == null ||
      Score3 == null ||
      Score4 == null ||
      Score5 == null ||
      Score6 == null ||
      Score7 == null
    ) {
      Alert.alert('Isi semua pertanyaan !!!');
    } else {
      const score = Score1 + Score2 + Score3 + Score4 + Score5 + Score6;
      if (score === 0) {
        sendData(score, 'Resiko Rendah');
      } else if (score <= 5) {
        sendData(score, 'Resiko Sedang');
      } else {
        sendData(score, 'Resiko Besar');
      }
    }
  };

  const sendData = async (Score, HasilTest) => {
    const time = new Date();
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
      UserID: User._id,
      Nama: User.Nama,
      Score,
      HasilTest,
      Tanggal,
      Bulan,
      Tahun,
    };
    try {
      const response = await axios.post(`${url}/skrining`, data);
      Alert.alert(response.data.message);
      navigation.navigate('Home');
    } catch (err) {
      Alert.alert(err.message);
      navigation.navigate('Home');
    }
  };
  return (
    <Container>
      <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.background}>
        <Text style={styles.title}>FORM SKRINING MANDIRI</Text>
        <Content>
          <View style={styles.container}>
            <List style={styles.form}>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  1. Apakah anda pernah keluar rumah/tempat umum (pasar,
                  fasyankes, kerumunan, dan lain-lain) ?
                </Text>
                <RadioForm
                  radio_props={radio1}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore1(value)}
                />
              </View>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  2. Apakah anda pernah menggunakan transportasi umum ?
                </Text>
                <RadioForm
                  radio_props={radio1}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore2(value)}
                />
              </View>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  3. Apakah pernah melakukan perjalanan ke luar
                  kota/internasional? (wilayah yang terjangkit/zona merah) ?
                </Text>
                <RadioForm
                  radio_props={radio1}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore3(value)}
                />
              </View>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  4. Apakah anda mengikuti kegiatan yang melibatkan orang banyak
                  ?
                </Text>
                <RadioForm
                  radio_props={radio1}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore4(value)}
                />
              </View>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  5. Apakah memiliki riwayat kontak erat dengan orang yang
                  dinyatakan ODP, PDP atau konfirm COVID-19 (berjabat tangan,
                  berbicara, berada dalam satu ruangan/ satu rumah)?
                </Text>
                <RadioForm
                  radio_props={radio2}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore5(value)}
                />
              </View>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  6. Apakah anda sedang mengalami demam lebih dari 38 °C ?
                </Text>
                <RadioForm
                  radio_props={radio2}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore6(value)}
                />
              </View>
              <View style={styles.listItemContainer}>
                <Text style={styles.soal}>
                  7. Apakah pernah mengalami batuk/pilek/sakit tenggorokan/sesak
                  dalam 14 hari terakhir?
                </Text>
                <RadioForm
                  radio_props={radio2}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={'gray'}
                  selectedButtonColor={'gray'}
                  buttonSize={15}
                  buttonOuterSize={30}
                  animation={true}
                  onPress={value => setScore7(value)}
                />
              </View>
            </List>
            <View style={styles.buttonContainer}>
              <Button full rounded success onPress={getScore}>
                <Text>Submit</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded light onPress={() => navigation.goBack()}>
                <Text>Batal</Text>
              </Button>
            </View>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default FormSkrining;
