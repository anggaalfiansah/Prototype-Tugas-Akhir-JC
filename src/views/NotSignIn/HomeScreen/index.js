/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {Image} from 'react-native';

const Home = ({navigation}) => {
  return (
    <LinearGradient colors={['#deaaff', '#FFFFFF']} style={styles.container}>
      <Text style={styles.title}>VISITOR ACCESS CONTROL</Text>
      <Image style={styles.gambar} source={require('./face-reco.png')} />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          full
          rounded
          onPress={() => navigation.navigate('Login')}>
          <Text>Masuk</Text>
        </Button>
        <Button
          style={styles.button}
          full
          rounded
          onPress={() => navigation.navigate('Register')}>
          <Text>Buat Akun</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};
export default Home;
