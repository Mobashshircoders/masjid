import React from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Infoone = () => {
    return(
        <View style={styles.container}>
           
            <Text style={styles.header}>Please Follow all mosque instruction</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '20%',
      alignItems:'center',
      justifyContent:'center',

    },
    header:{
      color: '#909090',
      fontSize: 30,
    }
  });

export default Infoone;