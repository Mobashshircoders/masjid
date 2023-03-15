import React from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const HeaderBox = () => {
    return(
        <View style={styles.container}>
           
            <Text style={styles.header}> التاريخ 26  سَنَوَات 22   -   12 محرم 1443         جَامِع ٱلشَّيْخ زَايِد ٱلْكَبِيْر</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '15%',
      alignItems:'flex-end',
      justifyContent:'flex-end',

    },
    header:{
      color: '#d0f0bd',
      fontSize: 30,
      fontFamily:'JetBrainsMono-ExtraBold',
      fontWeight:'bold',
    }
  });

export default HeaderBox;