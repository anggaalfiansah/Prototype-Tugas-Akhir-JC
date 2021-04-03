/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './HomeScreen/Home';
import Login from './LoginScreen/Login';
import Register from './RegisterScreen/Register';
import FaceRegister from './FaceRegisterScreen/FaceRegister';
import AddressRegister from './AddressRegister/AddressRegister';

const Stack = createStackNavigator();
const NotSignIn = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddressRegister" component={AddressRegister} />
        <Stack.Screen name="FaceRegister" component={FaceRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NotSignIn;
