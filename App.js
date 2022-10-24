import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Basket from './src/pages/Basket/basket';

import Mock from './src/Mocks/data';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Basket {...Mock}/>
    </SafeAreaView>
  );
}