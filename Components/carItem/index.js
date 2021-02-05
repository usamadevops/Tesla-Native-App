import React from 'react';
import {  Text, View , ImageBackground} from 'react-native';
import  styles from "./styles"
import StyledButton from '../StyledButton/index'
const CarItem=(props)=>{
  const {name,tagline,taglineCTA,Image}=props;
      return(

          
            <View style={styles.CarContainer}>
            <ImageBackground  source={Image} style={styles.Image}/>
            <View style={styles.Titles}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{tagline}{' '}
              <Text style={styles.subtitleCTA}>
                {taglineCTA}
              </Text>
              </Text>
           
              </View>
              <View style={styles.Buttons}>
              <StyledButton  
              type='primary'
              content={"Custom Order"}
              onPress={()=>{console.warn("Custom order was pressed")}}
              
              />
                <StyledButton  
              type='secondary'
              content={"Existing Inventory"}
              onPress={()=>{console.warn("Existing Inventory was Pressed")}}
              
              />
              </View>
          
            </View>
          
      );
}
export default CarItem;
