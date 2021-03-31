/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button, Input, Item} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const Login = ({navigation}) => {
  const login = () => {};
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <Text style={styles.title}>Visitor Access Control</Text>
      <View style={styles.form}>
        <Item regular style={styles.inputContainer}>
          <Input placeholder="Email" style={styles.input} />
        </Item>
        <Item regular style={styles.inputContainer}>
          <Input secureTextEntry placeholder="Password" style={styles.input} />
        </Item>
      </View>
      <View style={styles.buttonContainer}>
        <Button full rounded success onPress={login}>
          <Text>Login</Text>
        </Button>
      </View>
      <View style={styles.buttonContainer}>
        <Button full rounded light onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </Button>
      </View>
    </LinearGradient>
  );
};

export default Login;
