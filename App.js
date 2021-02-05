import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
//import {Model3,ModelS,ModelX,ModelY,SolarPanels,SolarRoof,logo,menu}   from './Images';
import CarItem from "./Components/carItem/index";
export default function App() {
  return (
 <View style={styles.container}>
<CarItem 
name={"Model X"}
tagline={"Starting from 69,000"}
taglineCTA={"Touchless"}
Image={require("./assets/Images/ModelX.jpeg")}
/>
<StatusBar style="auto"/>
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
