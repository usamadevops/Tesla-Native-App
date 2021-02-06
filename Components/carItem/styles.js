import {StyleSheet,Dimensions} from 'react-native'
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      CarContainer:{
        width:'100%',
        height:Dimensions.get('window').height,
      },
      Titles:{
        marginTop:'30%',
        width:'100%',
        alignItems:'center',
      },
      title:{
        fontSize:40,
        fontWeight:'500',
      },
      subtitle:{
        fontSize:16,
        color:'#5c5e62',
      },
      Image:{
        width:'100%',
        height:'100%',
        resizeMode:"cover",
        position:"absolute"
      },
      Buttons:{
        position:'absolute',
        bottom:50,
        width:'100%',
      },
      subtitleCTA:{
        textDecorationLine:"underline",
        
      }
    
    
    });
    export default styles;