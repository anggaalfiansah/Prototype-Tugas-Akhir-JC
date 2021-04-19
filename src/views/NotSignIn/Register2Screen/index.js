/* eslint-disable prettier/prettier */
import axios from 'axios';
import {
  View,
  Item,
  Picker,
  Icon,
  Textarea,
  Container,
  Content,
  Text,
  Button,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {LogBox, Image, Alert} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const AddressRegister = ({route, navigation}) => {
  const Data = route.params;
  const [FotoProfil, setFotoProfil] = useState(
    'https://img.icons8.com/ios-glyphs/100/000000/camera.png',
  );
  const [Error, setError] = useState(false);
  const [DetailAlamat, setDetailAlamat] = useState();
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

  // Fungsi untuk menjalankan ImagePicker Untuk mengambil gambar melalui Kamera
  const captureImage = async () => {
    let options = {
      maxWidth: 1280,
      maxHeight: 1024,
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
      setFotoProfil(response.uri);
    });
  };

  // Fungsi untuk menjalankan ImagePicker Untuk mengambil gambar melalui file
  const chooseFile = async () => {
    let options = {
      maxWidth: 1280,
      maxHeight: 1024,
      quality: 1,
    };
    launchImageLibrary(options, response => {
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
      setFotoProfil(response.uri);
    });
  };

  useEffect(() => {
    getProvinsi();
    getKota();
    getKecamatan();
    getKelurahan();
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Provinsi, Kota, Kecamatan, Kelurahan]);

  const next = () => {
    const data = {
      ...Data,
      Provinsi: Provinsi.nama,
      Kota: Kota.nama,
      Kecamatan: Kecamatan.nama,
      Kelurahan: Kelurahan.nama,
      DetailAlamat,
      FotoProfil,
    };
    if (
      FotoProfil ===
        'https://img.icons8.com/ios-glyphs/100/000000/camera.png' ||
      Provinsi.id === 0 ||
      Kota.id === 0 ||
      Kecamatan.id === 0 ||
      Kelurahan.id === 0 ||
      !DetailAlamat
    ) {
      Alert.alert('Harap Isi semua Data');
      setError(true);
    } else {
      navigation.navigate('Register3', data);
    }
  };

  return (
    <Container>
      <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.background}>
        <Content>
          <View style={styles.container}>
            <View tyle={styles.form}>
              <Text style={styles.profilText}>FOTO PROFIL :</Text>
              <View style={styles.profilContainer}>
                {FotoProfil !==
                'https://img.icons8.com/ios-glyphs/100/000000/camera.png' ? (
                  <Image
                    source={{
                      uri: FotoProfil,
                    }}
                    style={styles.profil2}
                  />
                ) : (
                  <Image
                    source={{
                      uri: FotoProfil,
                    }}
                    style={styles.profil}
                  />
                )}
                <View style={styles.profilButton}>
                  <Button
                    style={styles.buttonCamera}
                    full
                    rounded
                    primary
                    onPress={captureImage}>
                    <Text style={styles.textStyle}>Camera</Text>
                  </Button>
                  <Button
                    style={styles.buttonCamera}
                    full
                    rounded
                    primary
                    onPress={chooseFile}>
                    <Text style={styles.textStyle}>File</Text>
                  </Button>
                </View>
              </View>
              <Text style={styles.profilText}>ALAMAT :</Text>
              <Item regular picker error={Error} style={styles.inputContainer}>
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
              <Item regular picker error={Error} style={styles.inputContainer}>
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
              <Item regular picker error={Error} style={styles.inputContainer}>
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
              <Item regular picker error={Error} style={styles.inputContainer}>
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
              <Item regular error={Error} style={styles.textAreaContainer}>
                <Textarea
                  rowSpan={5}
                  placeholder="Detail Alamat"
                  style={styles.textArea}
                  value={DetailAlamat}
                  onChangeText={detailAlamat => setDetailAlamat(detailAlamat)}
                />
              </Item>
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button} full rounded onPress={next}>
                <Text>Selanjutnya</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button
                style={styles.button2}
                full
                rounded
                onPress={() => navigation.goBack()}>
                <Text>Sebelumnya</Text>
              </Button>
            </View>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default AddressRegister;
