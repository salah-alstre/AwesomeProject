import React from 'react';
import { View } from 'react-native';
import MainNavigation from './route/nav';
import HomeScreen from './Src/screens/HomeScreen';
import AmidAppProvider from './store/AmidAppprovider';

function App() {
  return (
    <View style={{ flex: 1 }}>
      <AmidAppProvider>
        <MainNavigation />
      </AmidAppProvider>
    </View>
  )
}
export default App;