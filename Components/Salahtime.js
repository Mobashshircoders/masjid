import React ,  {useState, useEffect} from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const Salahtime = () => {

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
      width: '100%',
      height: '100%',
      alignItems:'center',
      justifyContent:'center',
      padding: 10,
      
      marginTop: 0,

    },
    innercontainer:{
        flexDirection: 'row',
       
    },
    sharedsl:{
        flex: 1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
    },
    header:{
      color: '#fff',
      fontSize: 30,
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

export default Salahtime;