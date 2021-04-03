/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import storage from '../../storage/storage';

const SignIn = () => {
  const data = useSelector(state => state.login);
  const dispatch = useDispatch();
  const logout = async () => {
    storage.remove({
      key: 'loginState',
    });
    dispatch({type: 'Logout'});
  };
  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Selamat Datang {data.data.Nama}</Text>
      <TouchableOpacity
        style={{backgroundColor: 'red', padding: 10, marginVertical:20, borderRadius:10}}
        onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
