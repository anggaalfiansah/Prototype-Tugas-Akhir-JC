/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, Input, Item, Content, Container} from 'native-base';
import {Alert} from 'react-native';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const FormKunjungan = ({navigation}) => {
    const [TanggalKunjungan, setTanggalKunjungan] = useState();
  return (
    <Container>
      <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.background}>
        <Text style={styles.title}>Create an Account</Text>
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
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded success>
                <Text>Register</Text>
              </Button>
            </View>
            <View style={styles.buttonContainer}>
              <Button full rounded light onPress={() => navigation.goBack()}>
                <Text>Cancel</Text>
              </Button>
            </View>
          </View>
        </Content>
      </LinearGradient>
    </Container>
  );
};

export default FormKunjungan;
