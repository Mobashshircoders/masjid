import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import Advertisement from '../ControlComponents/Advertisement';

import Nextazaan from '../Controls/Nextazaan';
import Jumuatime from '../Controls/Jumuatime';
import Clockdesigntwo from '../ControlComponents/Clockdesigntwo';
import Arabicclockdate from '../ControlComponents/Arabicclockdate';
import Engclockdate from '../ControlComponents/Engclockdate';
import Iqamaafter from '../Controls/Iqamaafter';
import Fajrtime from '../Controls/Fajrtime';
import Dhuhrtime from '../Controls/Dhuhrtime';
import Asrtime from '../Controls/Asrtime';
import Maghribtime from '../Controls/Maghribtime';
import Ishatime from '../Controls/Ishatime';
import Shawwaltime from '../Controls/Shawwaltime';
import Currentdayeng from '../Controls/Currentdayeng';
import Nextazaantext from '../Controls/Nextazaantext';
import Iqamaaftertext from '../Controls/Iqamaaftertext';
import Fajrtext from '../Controls/Fajrtext';
import Dhuhrtext from '../Controls/Dhuhrtext';
import Asrtext from '../Controls/Asrtext';
import Maghribtext from '../Controls/Maghribtext';
import Ishatext from '../Controls/Ishatext';
import Jumuatext from '../Controls/Jumuatext';
import Shuruqtext from '../Controls/Shuruqtext';
import Azaantext from '../Controls/Azaantext';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Verticalonebase = ({navigation}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/Horizontal/Designfive/bgnine.png')}>
      <View style={styles.maincontainer}>
        <View style={styles.one}></View>
        <View style={styles.two}></View>
        <View style={styles.three}></View>
        <View style={styles.four}></View>
        <View style={styles.five}></View>
        <View style={styles.six}></View>
        <View style={styles.seven}></View>
        <View style={styles.eight}></View>
        <View style={styles.nine}></View>
        <View style={styles.ten}></View>
      </View>
    </ImageBackground>
  );
};
export default Verticalonebase;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'yellow',
  },
  one: {
    flex: 3,
    backgroundColor: 'blue',
  },

  two: {
    flex: 2,
    backgroundColor: 'red',
  },

  three: {
    flex: 3,
    backgroundColor: 'green',
  },

  four: {
    flex: 3,
    backgroundColor: 'yellow',
  },

  five: {
    flex: 6,
    backgroundColor: 'blue',
  },

  six: {
    flex: 5,
    backgroundColor: 'red',
  },

  seven: {
    flex: 4,
    backgroundColor: 'green',
  },

  eight: {
    flex: 20,
    backgroundColor: 'black',
  },

  nine: {
    flex: 5,
    backgroundColor: 'yellow',
  },

  ten: {
    flex: 2,
    backgroundColor: 'blue',
  },
});
