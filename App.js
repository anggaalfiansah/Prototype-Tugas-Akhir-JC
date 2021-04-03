import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Welcome from './src/views/Welcome/Welcome';

const App = () => {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
};

export default App;
