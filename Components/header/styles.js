import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
      container: {
            position:"absolute",
            zIndex:100,
            width:"100%",
            top:20,
            justifyContent:"space-between",
            flexDirection:"row"
      },
      logo:{
          width:100,
          height:20,
          resizeMode:'contain',
          left:10,

      },
      menu:{
            width:25,
            height:25,
            right:10
      }
});
export default styles;