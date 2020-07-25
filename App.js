import React, {useState} from 'react';

import Home from './src/screens/Home';

// Redux
import {Provider} from 'react-redux';
import configureStore from './src/redux/index';

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
