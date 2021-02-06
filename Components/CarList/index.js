import React from 'react'
import { View, Text,FlatList ,Dimensions} from 'react-native'
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem/index'
const CarsList = (props) => {
      console.log(cars);
      return (
            <View style={styles.container}>
               <FlatList
               data={cars}
               renderItem={({item})=> <CarItem car={item}/ >}
               showsVerticalScrollIndicator={false}
snapToStart={'start'}
decelerationRate={'normal'}
  snapToInterval={Dimensions.get('window').height}
    
                     />

         
            </View>
      );
};

export default CarsList;
