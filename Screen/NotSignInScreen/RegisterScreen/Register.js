/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Input,
  Item,
  Picker,
  Icon,
  Textarea,
  Content,
  Container,
} from 'native-base';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {LogBox} from 'react-native';
import axios from 'axios';

const Register = ({navigation}) => {
  const [NIK, setNIK] = useState();
  const [Nama, setNama] = useState();
  const [Email, setEmail] = useState();
  const [TempatLahir, setTempatLahir] = useState();
  const [TanggalLahir, setTanggalLahir] = useState();
  const [DetailAlamat, setDetailAlamat] = useState();
  // State Password & Validasinya
  const [Password, setPassword] = useState('');
  const [RepeatPassword, setRepeatPassword] = useState('');
  // State Provinsi & Pendukungnya
  const [Provinsi, setProvinsi] = useState({id: 0, nama: 'Pilih Provinsi'});
  const [ListProvinsi, setListProvinsi] = useState([]);
  // State Kota/Kabupaten & Pendukungnya
  const [Kota, setKota] = useState({id: 0, nama: 'Pilih Kota/Kabupaten'});
  const [ListKota, setListKota] = useState([]);
  // State Kecamatan & Pendukungnya
  const [Kecamatan, setKecamatan] = useState({id: 0, nama: 'Pilih Kecamatan'});
  const [ListKecamatan, setListKecamatan] = useState([]);
  // State Kelurahan & Pendukungnya
  const [Kelurahan, setKelurahan] = useState({
    id: 0,
    nama: 'Pilih Desa/Kelurahan',
  });
  const [ListKelurahan, setListKelurahan] = useState([]);

  const url = 'https://dev.farizdotid.com/api/daerahindonesia';

  const getProvinsi = () => {
    axios
      .get(`${url}/provinsi`)
      .then(response => {
        // handle success
        const listProvinsi = [{id: 0, nama: 'Pilih Provinsi'}];
        listProvinsi.push(...response.data.provinsi);
        setListProvinsi(listProvinsi);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  const getKota = () => {
    axios
      .get(`${url}/kota?id_provinsi=${Provinsi.id}`)
      .then(response => {
        // handle success
        const listKota = [{id: 0, nama: 'Pilih Kota/Kabupaten'}];
        listKota.push(...response.data.kota_kabupaten);
        setListKota(listKota);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  const getKecamatan = () => {
    axios
      .get(`${url}/kecamatan?id_kota=${Kota.id}`)
      .then(response => {
        // handle success
        const listKecamatan = [{id: 0, nama: 'Pilih Kecamatan'}];
        listKecamatan.push(...response.data.kecamatan);
        setListKecamatan(listKecamatan);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };
  const getKelurahan = () => {
    axios
      .get(`${url}/kelurahan?id_kecamatan=${Kecamatan.id}`)
      .then(response => {
        // handle success
        const listkelurahan = [{id: 0, nama: 'Pilih Kelurahan'}];
        listkelurahan.push(...response.data.kelurahan);
        setListKelurahan(listkelurahan);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
  };

  const createAccount = () => {
    const data = {
      NIK,
      Nama,
      Email,
      TempatLahir,
      TanggalLahir,
      Provinsi: Provinsi.nama,
      Kota: Kota.nama,
      Kecamatan: Kecamatan.nama,
      Kelurahan: Kelurahan.nama,
      DetailAlamat,
      Password,
    };
    navigation.navigate('FaceRegister', data);
  };

  useEffect(() => {
    getProvinsi();
    getKota();
    getKecamatan();
    getKelurahan();
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, [Provinsi, Kota, Kecamatan, Kelurahan]);

  return (
    <Container>
      <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.background}>
        <Text style={styles.title}>Create an Account</Text>
        <Content>
          <View style={styles.container}>
            <View style={styles.form}>
              <Item regular style={styles.inputContainer}>
                <Input
                  keyboardType="number-pad"
                  placeholder="NIK"
                  style={styles.input}
                  value={NIK}
                  onChangeText={nik => setNIK(nik)}
                />
              </Item>
              <Item regular style={styles.inputContainer}>
                <Input
                  placeholder="Nama"
                  style={styles.input}
                  value={Nama}
                  onChangeText={nama => setNama(nama)}
                />
              </Item>
              <Item regular style={styles.inputContainer}>
                <Input
                  textContentType="emailAddress"
                  placeholder="Email"
                  style={styles.input}
                  value={Email}
                  onChangeText={email => setEmail(email)}
                />
              </Item>
              <Item regular style={styles.inputContainer}>
                <Input
                  placeholder="Tempat Lahir"
                  style={styles.input}
                  value={TempatLahir}
                  onChangeText={tempatLahir => setTempatLahir(tempatLahir)}
                />
              </Item>
              <Item regular style={styles.dateContainer}>
                <DatePicker
                  style={styles.dateInput}
                  date={TanggalLahir}
                  mode="date"
                  placeholder="Tanggal Lahir"
                  format="YYYY-MM-DD"
                  minDate="1900-01-01"
                  maxDate={new Date()}
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={date => {
                    setTanggalLahir(date);
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
              <Item regular picker style={styles.inputContainer}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  selectedValue={Provinsi}
                  onValueChange={value => setProvinsi(ListProvinsi[value])}>
                  {ListProvinsi.map((item, key) => {
                    return (
                      <Picker.Item key={key} label={item.nama} value={key} />
                    );
                  })}
                </Picker>
              </Item>
              <Item regular picker style={styles.inputContainer}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  selectedValue={Kota}
                  onValueChange={value => setKota(ListKota[value])}>
                  {ListKota.map((item, key) => {
                    return (
                      <Picker.Item key={key} label={item.nama} value={key} />
                    );
                  })}
                </Picker>
              </Item>
              <Item regular picker style={styles.inputContainer}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  selectedValue={Kecamatan}
                  onValueChange={value => setKecamatan(ListKecamatan[value])}>
                  {ListKecamatan.map((item, key) => {
                    return (
                      <Picker.Item key={key} label={item.nama} value={key} />
                    );
                  })}
                </Picker>
              </Item>
              <Item regular picker style={styles.inputContainer}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  selectedValue={Kelurahan}
                  onValueChange={value => setKelurahan(ListKelurahan[value])}>
                  {ListKelurahan.map((item, key) => {
                    return (
                      <Picker.Item key={key} label={item.nama} value={key} />
                    );
                  })}
                </Picker>
              </Item>
              <Item regular style={styles.textAreaContainer}>
                <Textarea
                  rowSpan={5}
                  placeholder="Detail Alamat"
                  style={styles.textArea}
                  value={DetailAlamat}
                  onChangeText={detailAlamat => setDetailAlamat(detailAlamat)}
                />
              </Item>
              <Item regular style={styles.inputContainer}>
                <Input
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.input}
                  value={Password}
                  onChangeText={password => setPassword(password)}
                />
              </Item>
              <Item regular style={styles.inputContainer}>
                <Input
                  secureTextEntry={true}
                  placeholder="Repeat Password"
                  style={styles.input}
                  value={RepeatPassword}
                  onChangeText={repeatPassword =>
                    setRepeatPassword(repeatPassword)
                  }
                />
              </Item>
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded success onPress={createAccount}>
                <Text>Register</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded light onPress={() => navigation.goBack()}>
                <Text>Back</Text>
              </Button>
            </View>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default Register;
