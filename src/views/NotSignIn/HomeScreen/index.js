/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <Text style={styles.title}>VISITOR ACCESS CONTROL</Text>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          full
          rounded
          success
          onPress={() => navigation.navigate('Login')}>
          <Text>Masuk</Text>
        </Button>
        <Button
          style={styles.button}
          full
          rounded
          success
          onPress={() => navigation.navigate('Register')}>
          <Text>Buat Akun</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};
export default Home;
