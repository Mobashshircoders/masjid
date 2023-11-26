import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Fajrazaantime from '../Controls/Fajrazaantime';
import Fajrtime from '../Controls/Fajrtime';
import Dhuhrazaantime from '../Controls/Dhuhrazaantime';
import Dhuhrtime from '../Controls/Dhuhrtime';
import Asrazaantime from '../Controls/Asrazaantime';
import Asrtime from '../Controls/Asrtime';
import Maghribazaantime from '../Controls/Maghribazaantime';
import Maghribtime from '../Controls/Maghribtime';
import Ishaazaantime from '../Controls/Ishaazaantime';
import Ishatime from '../Controls/Ishatime';
import Jumuatime from '../Controls/Jumuatime';
import Shawwaltime from '../Controls/Shawwaltime';
import Fajrtext from '../Controls/Fajrtext';
import Dhuhrtext from '../Controls/Dhuhrtext';
import Asrtext from '../Controls/Asrtext';
import Maghribtext from '../Controls/Maghribtext';
import Ishatext from '../Controls/Ishatext';
import Jumuatext from '../Controls/Jumuatext';
import Shuruqtext from '../Controls/Shuruqtext';
import Azaantext from '../Controls/Azaantext';
import Salattext from '../Controls/Salattext';
import Iqamatext from '../Controls/Iqamatext';
import DefaultPreference from 'react-native-default-preference';

const Namaaztimingrecode = () => {
  const [font, setFont] = useState('');

  useEffect(() => {
    getFont();
  });

  function getFont() {
    try {
      DefaultPreference.get('font').then(function (value) {
        setFont(value);
      });
    } catch (e) {
      // error reading value
    }
  }
  return (
    <View style={styles.mosquetimingwrapper}>
      <View style={styles.mosquetimings}>
        <Azaantext style={[styles.timingtext, {fontFamily: font}]} />
        <Salattext style={[styles.timingtext, {fontFamily: font}]} />
        <Iqamatext style={[styles.timingtext, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Fajrazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Fajrtext style={[styles.timingtext, {fontFamily: font}]} />
        <Fajrtime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Dhuhrazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Dhuhrtext style={[styles.timingtext, {fontFamily: font}]} />
        <Dhuhrtime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Asrazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Asrtext style={[styles.timingtext, {fontFamily: font}]} />
        <Asrtime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Maghribazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Maghribtext style={[styles.timingtext, {fontFamily: font}]} />
        <Maghribtime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Ishaazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Ishatext style={[styles.timingtext, {fontFamily: font}]} />
        <Ishatime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mosquetimingwrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: '2%',
  },
  mosquetimings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timingtext: {
    fontSize: 32,
    color: 'white',
  },
  timingtext1: {
    fontSize: 34,
    color: 'orange',
  },
});

export default Namaaztimingrecode;
