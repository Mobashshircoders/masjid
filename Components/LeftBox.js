import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer';
import DigitalClock from "./DigitalClock";
import Salahtime from "./Salahtime";
import DaySalah from "./DaySalah";

const LeftBox = () => {
    return(
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.inner}>
                    <DigitalClock/>
                    <Salahtime />
                </View>
            </View>
            
                
                <View style={styles.verticleLine}></View>
                
           


            <View style={styles.box}>
                <View style={styles.inner}>
                    <DaySalah/>
                </View>
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '70%',
        padding: 5,
        paddingBottom: 0,
        paddingTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        width:'48%',
        height: '50%',
        
        
    },
    inner:{
        flex: 1,
        
        backgroundColor: '#000',
        alignItems:'center',
        justifyContent:'center'
    },
    verticleLine: {
        height: '60%',
        width: 2,
        backgroundColor: '#909090',
      },
    textstyle: {
        color: '#fff'
    }
  });

export default LeftBox;