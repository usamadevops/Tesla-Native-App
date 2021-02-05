import React from 'react';
import {  Text, View , ImageBackground} from 'react-native';
import  styles from "./styles"

const CarItem=(props)=>{
      return(
          
            <View style={styles.CarContainer}>
              <ImageBackground  source={require('../../assets/Images/ModelX.jpeg')} style={styles.Image}/>
            <View style={styles.Titles}>
              <Text style={styles.title}>Model X</Text>
              <Text style={styles.subtitle}>Starting at $69,000</Text>
            </View>
            </View>
          
      )
};
export default CarItem;
