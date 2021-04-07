/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, Input, Item, Content, Container} from 'native-base';
import {Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Register = ({navigation}) => {
  const [NIK, setNIK] = useState();
  const [Nama, setNama] = useState();
  const [Email, setEmail] = useState();
  const [TempatLahir, setTempatLahir] = useState();
  const [TanggalLahir, setTanggalLahir] = useState();
  // State Password & Validasinya
  const [Password, setPassword] = useState();
  const [RepeatPassword, setRepeatPassword] = useState();
  const [InputStyle, setInputStyle] = useState(styles.inputContainer);

  const createAccount = () => {
    const Data = {
      NIK,
      Nama,
      Email,
      TempatLahir,
      TanggalLahir,
      Password,
    };
    console.log(Data);
    if (
      !Data.NIK ||
      !Data.Nama ||
      !Data.Email ||
      !Data.TempatLahir ||
      !Data.Password
    ) {
      Alert.alert('Harap Isi Semua Data');
      setInputStyle(styles.inputContainerDanger);
    } else {
      if (Data.NIK.length !== 16) {
        Alert.alert('NIK tidak sesuai');
      } else if (Data.Password.length < 6) {
        Alert.alert('Password minimal 6 karakter');
      } else if (Data.Password !== RepeatPassword) {
        Alert.alert('Password tidak sama');
      } else {
        navigation.navigate('Register2', Data);
      }
    }
  };

  return (
    <Container>
      <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.background}>
        <Text style={styles.title}>BUAT AKUN</Text>
        <Content>
          <View style={styles.container}>
            <View style={styles.form}>
              <Item regular style={InputStyle}>
                <Input
                  keyboardType="number-pad"
                  placeholder="NIK"
                  style={styles.input}
                  value={NIK}
                  onChangeText={nik => setNIK(nik)}
                />
              </Item>
              <Item regular style={InputStyle}>
                <Input
                  placeholder="Nama"
                  style={styles.input}
                  value={Nama}
                  onChangeText={nama => setNama(nama)}
                />
              </Item>
              <Item regular style={InputStyle}>
                <Input
                  textContentType="emailAddress"
                  placeholder="Email"
                  style={styles.input}
                  value={Email}
                  onChangeText={email => setEmail(email)}
                />
              </Item>
              <Item regular style={InputStyle}>
                <Input
                  placeholder="Tempat Lahir"
                  style={styles.input}
                  value={TempatLahir}
                  onChangeText={tempatLahir => setTempatLahir(tempatLahir)}
                />
              </Item>
              <Item regular style={InputStyle}>
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
              <Item regular style={InputStyle}>
                <Input
                  secureTextEntry={true}
                  placeholder="Password"
                  style={styles.input}
                  value={Password}
                  onChangeText={password => setPassword(password)}
                />
              </Item>
              <Item regular style={InputStyle}>
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
                <Text>Daftar</Text>
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

export default Register;
