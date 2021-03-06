/* eslint-disable prettier/prettier */
import axios from 'axios';
import {Spinner, View} from 'native-base';
import React, {useState} from 'react';
import {Alert} from 'react-native';
import WebView from 'react-native-webview';
import {useDispatch} from 'react-redux';
import storage from '../../../storage/storage';
import styles from './styles';

const FaceRegister = ({route, navigation}) => {
  const data = route.params;
  const [FaceDescriptors, setFaceDescriptors] = useState();
  const [key, setkey] = useState(1);
  const [isWebViewUrlChanged, setisWebViewUrlChanged] = useState(false);
  const [Loading, setLoading] = useState(false);
  const url = 'https://services-tugas-akhir-jc.herokuapp.com';

  const dispatch = useDispatch();

  const onMessage = async e => {
    const face = e.nativeEvent.data;
    console.log(face);
    if (face === 'Verifikasi Berhasil') {
      setLoading(true);
      try {
        const formData = new FormData();
        formData.append('NIK', data.NIK);
        formData.append('Nama', data.Nama);
        formData.append('Email', data.Email);
        formData.append('Telpon', data.NoHP);
        formData.append('TempatLahir', data.TempatLahir);
        formData.append(
          'TanggalLahir',
          new Date(data.TanggalLahir).toISOString(),
        );
        formData.append('Provinsi', data.Provinsi);
        formData.append('Kota', data.Kota);
        formData.append('Kecamatan', data.Kecamatan);
        formData.append('Kelurahan', data.Kelurahan);
        formData.append('DetailAlamat', data.DetailAlamat);
        formData.append('Password', data.Password);
        formData.append('FotoProfil', {
          uri: data.FotoProfil,
          name: 'profil.jpg',
          type: 'image/jpeg',
        });
        formData.append('FaceDescriptors', FaceDescriptors);
        console.log(formData);

        const config = {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        };

        const response = await axios.post(
          `${url}/users/register`,
          formData,
          config,
        );
        if (response.data.message === 'NIK/Email Sudah Terdaftar') {
          Alert.alert(
            response.data.message,
            'NIK/Email sudah terdaftar di akun lain',
          );
          navigation.navigate('Welcome');
        } else {
          await storage.save({key: 'loginState', data: response.data});
          dispatch({
            type: 'Login',
            token: response.data,
          });
          Alert.alert(response.data.message, 'Anda akan di arahkan ke home');
          setLoading(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const faceJson = face;
      setFaceDescriptors(faceJson);
    }
  };

  // eslint-disable-next-line no-unused-vars
  const resetWebViewToInitialUrl = () => {
    if (isWebViewUrlChanged) {
      setkey(key + 1);
      setisWebViewUrlChanged(false);
    }
  };
  const setWebViewUrlChanged = webviewState => {
    if (webviewState.url !== 'https://face-recoginition-web.herokuapp.com/') {
      setisWebViewUrlChanged(true);
    }
  };
  const runFirst = `document.getElementById("nama-wajah").value = "${data.Nama}"`;

  return (
    <View style={styles.container}>
      {!Loading ? (
        <WebView
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabledAndroid={true}
          onMessage={onMessage}
          source={{uri: 'https://face-recoginition-web.herokuapp.com/'}}
          injectedJavaScript={runFirst}
          key={key}
          startInLoadingState={true}
          renderLoading={() => {
            return (
              <View style={styles.loading}>
                <Spinner color="blue" />
              </View>
            );
          }}
          onNavigationStateChange={setWebViewUrlChanged}
        />
      ) : (
        <View style={styles.loading}>
          <Spinner color="blue" />
        </View>
      )}
    </View>
  );
};
export default FaceRegister;
