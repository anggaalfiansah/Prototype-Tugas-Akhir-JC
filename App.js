import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import NotSignIn from './Screen/NotSignInScreen/NotSignIn';

const App = () => {
  return <NotSignIn />;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
