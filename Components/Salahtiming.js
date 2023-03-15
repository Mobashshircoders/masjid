import React,  {useState, useEffect} from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Salahtiming = () => {

    const [salahtime, setSalahtime] = useState([
        {name: 'Fajr', key: '05:30'},
        {name: 'Dhuhr', key: '01:30'},
        {name: 'Asr', key: '05:15'},
        {name: 'Magrib', key: '06:55'},
        {name: 'Isha', key: '08:30'},

    ]);

    return(
        <View style={styles.container}>
           {
            salahtime.map(item => (
                
                <View key={item.name} style={styles.innercontainer}>
                    <View style={styles.sharedsl}>
                        <Text style={styles.salahname}>{item.name} </Text>
                    </View>
                    <View style={styles.sharedsl}>
                        <Text style={styles.salahtime}> {item.key}</Text>
                    </View>
                    
                </View>
            ))
           }
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:'30%',
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',

    },
    
    innercontainer:{
        flexDirection: 'column',
       
    },
    header:{
      color: '#d0f0bd',
      fontSize: 30,
      fontFamily:'JetBrainsMono-ExtraBold',
      fontWeight:'bold',
    },
    sharedsl:{
        flex: 1,
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    salahname:{
        fontSize: 25,
        color: '#5bb377'
    },
    salahtime:{
        
        fontSize: 25,
        color: '#d7e653'
    }
  });

export default Salahtiming;