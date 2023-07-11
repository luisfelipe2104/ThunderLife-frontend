import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/Routes';

import { DataProvider } from './contexts/DataContext';
import Toast from 'react-native-toast-message';
import { toastConfig } from './components/toast/toastConfig';

import 'react-native-gesture-handler';

// eas build -p android --profile preview

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <Routes />
        <Toast config={toastConfig} />
        <StatusBar backgroundColor="#000" barStyle={'light-content'} />
      </DataProvider>
    </NavigationContainer>
  )
}
