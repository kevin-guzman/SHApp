

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Provider as StoreProvider} from 'react-redux'
import store from './store'
import Navigator from './src/Navigator'

const App = () =>  {
  return (
    <StoreProvider store={store} >
      <Navigator/>
    </StoreProvider>
  );
};


export default App;
