/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import storage from '../../storage/storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeNotSignIn from '../NotSignIn/HomeScreen';
import Login from '../NotSignIn/LoginScreen';
import Register from '../NotSignIn/RegisterScreen';
import Register2 from '../NotSignIn/Register2Screen';
import Register3 from '../NotSignIn/Register3Screen';
import HomeSignIn from '../SignIn/HomeScreen';
import FormKunjungan from '../SignIn/FormKunjungan';

const Stack = createStackNavigator();
const Welcome = () => {
  const Token = useSelector(state => state.login);
  const [isLogin, setisLogin] = useState(false);

  const dispatch = useDispatch();
  const login = async () => {
    await storage
      .load({
        key: 'loginState',
        autoSync: true,
        syncInBackground: true,
      })
      .then(ret => {
        dispatch({type: 'refresh', data: ret});
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.log(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            break;
          case 'ExpiredError':
            // TODO
            break;
        }
      });
  };

  useEffect(() => {
    login();
    console.log(Token);
    if (Token.token !== null && Token.userID !== null) {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
  }, [Token]);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isLogin ? (
          <>
            <Stack.Screen name="Welcome" component={HomeNotSignIn} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Register2" component={Register2} />
            <Stack.Screen name="Register3" component={Register3} />
          </>
        ) : (
          <>
            <Stack.Screen name="HomeScreen" component={HomeSignIn} />
            <Stack.Screen name="FormKunjungan" component={FormKunjungan} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Welcome;
