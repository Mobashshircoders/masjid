import React from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const HeaderBox = () => {
    return(
        <View style={styles.container}>
           
            <Text style={styles.header}> حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '10%',
      alignItems:'center',
      justifyContent:'center',

    },
    header:{
      color: '#d0f0bd',
      fontSize: 20,
      fontFamily:'JetBrainsMono-ExtraBold',
      fontWeight:'bold',
    }
  });

export default HeaderBox;