/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const TabHome = () => {
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <Text>Home</Text>
    </LinearGradient>
  );
};

export default TabHome;
