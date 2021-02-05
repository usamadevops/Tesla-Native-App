import React from 'react';
import {  Text, View,Pressable} from 'react-native';
import  styles from './style'

const StyledButton=(props)=>{

  //    const type=props.type;
   //   const content=props.content;
   //   const onPress=props.onPress;

      const {type,content,onPress}=props;
const bg=type=== 'primary' ? 'black':'#fff';
const tc= type==='primary' ? '#fff':"black";


      return(
            <View  style={styles.buttoncontainer}>
<Pressable
 style={[styles.button,{backgroundColor:bg}]}
onPress={()=>onPress()}
>
<Text  style={[styles.Text,{color:tc}]}>{content}</Text>
</Pressable>
</View>
      );
};
export default StyledButton;
