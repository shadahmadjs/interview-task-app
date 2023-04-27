
import Games from './src/screens/Games';
import React from 'react';
import { Provider } from 'react-redux';
import {store} from './src/store/store';

export default function App() {
  return (
    <Provider store={store}>
      <Games />
      </Provider>
  );
}

