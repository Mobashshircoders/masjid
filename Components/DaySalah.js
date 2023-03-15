import React ,  {useState, useEffect} from "react";
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';


const DaySalah = () => {

    const [salahtime, setSalahtime] = useState([
        {name: 'Sehr', key: '04:15'},
        {name: 'Fajr', key: '04:20'},
        {name: 'Sunrise', key: '06:05'},
        {name: 'Zawaal', key: '11:45'},
        {name: 'Dhuhr', key: '12:15'},
        {name: 'Asr', key: '05:15'},
        {name: 'Magrib', key: '06:55'},
        {name: 'Isha', key: '08:30'},
        {name: 'Juma', key: '12:45'},

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
      //height: '100%',
      alignItems:'center',
      justifyContent:'center',
      padding: 10,
      paddingLeft: 30,
      paddingTop: 70,
      

    },
    innercontainer:{
        flexDirection: 'row'
    },
    sharedsl:{
        flex: 1,
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

export default DaySalah;