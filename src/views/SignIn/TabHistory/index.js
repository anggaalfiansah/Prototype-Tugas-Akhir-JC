/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import storage from '../../../storage/storage';
import styles from './styles';

const TabHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const logout = async () => {
    await storage.remove({key: 'loginState'});
    await dispatch({type: 'Logout'});
  };
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TabHistory;
