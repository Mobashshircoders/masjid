import React from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Upcomingtime = () => {
    return(
        <View style={styles.container}>
           <View style={{
            width: 90,
            height: 90,

            borderRadius: 45,
            borderWidth: 1,
            borderColor: '#d0f0bd',
            borderStyle: 'solid',

            justifyContent: 'center'}}>
            <Text style={{fontSize: 20,textAlign: 'center', color: 'white'}}>20:30</Text></View>
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',

    },
    header:{
      color: '#d0f0bd',
      fontSize: 30,
      fontFamily:'JetBrainsMono-ExtraBold',
      fontWeight:'bold',
    }
  });

export default Upcomingtime;