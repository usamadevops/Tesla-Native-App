import React from 'react'
import { View,Image } from 'react-native';
import styles from '../header/styles';

const Header = () => {
      return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require("../../assets/Images/logo.png")}/>
                <Image style={styles.menu} source={require("../../assets/Images/menu.png")}/>
            </View>
      )
}

export default Header
