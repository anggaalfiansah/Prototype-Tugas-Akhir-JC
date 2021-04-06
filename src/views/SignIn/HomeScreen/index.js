/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TabHome from '../TabHome';
import TabHistory from '../TabHistory';

const Tab = createBottomTabNavigator();
const Home = () => {
  const data = useSelector(state => state.login);
  const [User, setUser] = useState();

  const url = 'https://services-tugas-akhir-jc.herokuapp.com';
  const config = {
    headers: {Authorization: data.token},
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(`${url}/users/${data.userID}`, config);
      console.log(response);
      await setUser(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Tab1') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Tab2') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4A8EDE',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Tab1" component={TabHome} />
      <Tab.Screen name="Tab2" component={TabHistory} />
    </Tab.Navigator>
  );
};

export default Home;
