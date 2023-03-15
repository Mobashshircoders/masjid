import React,  {useState, useEffect} from "react";
import {Image, StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Clockde from './Clockde';

import Upcomingtime from './Upcomingtime';


const DigitalClock = () => {
    const [clockstate, setClockstate] = useState();

    useEffect(() => {
        setInterval(() => {
            const d = new Date();
            setClockstate(d.toLocaleTimeString());
        }, 1000);
    }, [] );

    return(
      <View style={styles.parentcl}>
        
        
        <View>
          <Image  source={require('../assets/images/mosquelogotwo.png')} style={styles.img}/>
        </View>
        <View><Clockde/></View>
        <View><Upcomingtime/></View>
           
            
        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
      

    },
    parentcl:{
      flex: 1,
      flexDirection: 'row',
      width: '100%',
       height: '20%',
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    header:{
      color: '#9cfff7',
      fontSize: 50,
      
    }, 
    img:{
      width: 90,
      height: 90,
    }
  });

export default DigitalClock;