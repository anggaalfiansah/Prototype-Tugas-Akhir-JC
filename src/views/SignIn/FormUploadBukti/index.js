/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Item,
  Picker,
  Icon,
  Content,
  Container,
} from 'native-base';
import {Alert, Image, TouchableOpacity, BackHandler} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {launchCamera} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import axios from 'axios';

const FormUploadBukti = ({route, navigation}) => {
  const AttendanceID = route.params;
  const jenisTest = ['Pilih Jenis Test', 'SWAB', 'Rapid Test', 'Genose19'];
  const [PilihTest, setPilihTest] = useState('Pilih Jenis Test');
  const [TanggalTest, setTanggalTest] = useState(new Date());
  // const [HasilTest, setHasilTest] = useState();
  const [FotoBukti, setFotoBukti] = useState(
    'https://img.icons8.com/ios-glyphs/100/000000/camera.png',
  );
  const url = 'https://services-tugas-akhir-jc.herokuapp.com';

  // Fungsi untuk menjalankan ImagePicker Untuk mengambil gambar melalui Kamera
  const captureImage = async () => {
    let options = {
      maxWidth: 720,
      maxHeight: 1280,
      quality: 1,
      saveToPhotos: true,
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode === 'camera_unavailable') {
        Alert.alert('Camera not available on device');
        return;
      } else if (response.errorCode === 'permission') {
        Alert.alert('Permission not satisfied');
        return;
      } else if (response.errorCode === 'others') {
        Alert.alert(response.errorMessage);
        return;
      }
      setFotoBukti(response.uri);
    });
  };

  const handleBackButtonClick = () => {
    return true;
  };

  const uploadBukti = async () => {
    const data = {
      AttendanceID,
      JenisTest: PilihTest,
      TanggalTest: new Date(TanggalTest).toISOString(),
      HasilTest: false,
      FotoBukti: FotoBukti,
    };
    try {
      const formData = new FormData();
      formData.append('AttendanceID', data.AttendanceID);
      formData.append('JenisTest', data.JenisTest);
      formData.append('TanggalTest', data.TanggalTest);
      formData.append('HasilTest', data.HasilTest);
      formData.append('FotoBukti', {
        uri: data.FotoBukti,
        name: 'bukti.jpg',
        type: 'image/jpeg',
      });
      console.log(formData);

      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      // const response = await axios.post(`https://services-tugas-akhir-jc.herokuapp.com/bukti`, formData, config);
      const response = await axios.post(`${url}/bukti`, formData, config);
      console.log(response);
      Alert.alert(response.data.message);
      navigation.navigate('HistoryScreen');
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
  }, []);

  return (
    <Container>
      <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.background}>
        <Text style={styles.title}>SILAHKAN UPLOAD BUKTI TEST COVID</Text>
        <Content>
          <View style={styles.container}>
            <View tyle={styles.form}>
              <Text style={styles.profilText}>Tanggal Test:</Text>
              <Item regular style={styles.inputContainer}>
                <DatePicker
                  style={styles.dateInput}
                  date={TanggalTest}
                  mode="date"
                  placeholder="Tanggal Kunjungan"
                  format="YYYY-MM-DD"
                  minDate="1900-01-01"
                  maxDate="2100-01-01"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  onDateChange={date => {
                    setTanggalTest(date);
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
              <Text style={styles.profilText}>Jenis Test:</Text>
              <Item regular picker error={Error} style={styles.inputContainer}>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{width: undefined}}
                  selectedValue={PilihTest}
                  onValueChange={value => setPilihTest(value)}>
                  {jenisTest.map((item, key) => {
                    return <Picker.Item key={key} label={item} value={item} />;
                  })}
                </Picker>
              </Item>
              <Text style={styles.profilText}>Foto Bukti Test:</Text>
              <View style={styles.profilContainer}>
                <TouchableOpacity
                  style={styles.profilContainer2}
                  onPress={captureImage}>
                  {FotoBukti !==
                  'https://img.icons8.com/ios-glyphs/100/000000/camera.png' ? (
                    <Image
                      source={{
                        uri: FotoBukti,
                      }}
                      style={styles.profil}
                    />
                  ) : (
                    <Image
                      source={{
                        uri: FotoBukti,
                      }}
                      style={styles.profil2}
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button onPress={uploadBukti} full rounded style={styles.button}>
                <Text>Upload</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                full
                rounded
                style={styles.button2}
                onPress={() => {
                  BackHandler.removeEventListener(
                    'hardwareBackPress',
                    handleBackButtonClick,
                  );
                  navigation.navigate('Home');
                }}>
                <Text>Belum ada</Text>
              </Button>
            </View>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default FormUploadBukti;
