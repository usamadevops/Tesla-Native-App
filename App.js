import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Components/header/index'
import CarsList from './Components/CarList/index'
export default function App() {
  return (
 <View style={styles.container}>
   <Header />
<CarsList />
<StatusBar style="hide" hidden={true}/>
</View>

  );
}
const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
