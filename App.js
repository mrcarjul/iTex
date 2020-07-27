import React from 'react';

// Core
import { Platform } from 'react-native';
import Home from './src/screens/Home';

// External component
import AntDesign from 'react-native-vector-icons/AntDesign';

// Redux
import {Provider} from 'react-redux';
import configureStore from './src/redux/index';

export const store = configureStore();

function App() {
  if (Platform.OS === 'ios') {
    AntDesign.loadFont();
  }

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
