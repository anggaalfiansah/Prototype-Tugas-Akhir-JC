/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Home = ({navigation}) => {
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <Text style={styles.title}>Visitor Access Control</Text>
      <View style={styles.buttonContainer}>
        <Button
          full
          rounded
          success
          onPress={() => navigation.navigate('Login')}>
          <Text>Login</Text>
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          full
          rounded
          success
          onPress={() => navigation.navigate('Register')}>
          <Text>Register</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};
export default Home;
