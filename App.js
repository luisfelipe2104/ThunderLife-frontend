import { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './routes/TabRoutes';

import { DataProvider } from './contexts/DataContext';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <NavigationContainer>
      <DataProvider>
        <TabRoutes />
        <Toast />
        <StatusBar backgroundColor="#000" barStyle={'light-content'} />
      </DataProvider>
    </NavigationContainer>
  )
}
