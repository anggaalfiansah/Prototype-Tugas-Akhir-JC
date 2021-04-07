/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const History = ({navigation}) => {
  return (
    <LinearGradient colors={['#4A8EDE', '#FFFFFF']} style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('HistoryKunjungan')}>
        <View>
          <Text style={styles.buttonText}>HISTORY KUNJUNGAN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('HistorySkrining')}>
        <View>
          <Text style={styles.buttonText}>HISTORY SKRINING</Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default History;
