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

const Namaaztiming = () => {
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
        <Fajrazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Dhuhrazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Asrazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Maghribazaantime style={[styles.timingtext1, {fontFamily: font}]} />
        <Ishaazaantime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Salattext style={[styles.timingtext, {fontFamily: font}]} />
        <Fajrtext style={[styles.timingtext, {fontFamily: font}]} />
        <Dhuhrtext style={[styles.timingtext, {fontFamily: font}]} />
        <Asrtext style={[styles.timingtext, {fontFamily: font}]} />
        <Maghribtext style={[styles.timingtext, {fontFamily: font}]} />
        <Ishatext style={[styles.timingtext, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Iqamatext style={[styles.timingtext, {fontFamily: font}]} />
        <Fajrtime style={[styles.timingtext1, {fontFamily: font}]} />
        <Dhuhrtime style={[styles.timingtext1, {fontFamily: font}]} />
        <Asrtime style={[styles.timingtext1, {fontFamily: font}]} />
        <Maghribtime style={[styles.timingtext1, {fontFamily: font}]} />
        <Ishatime style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mosquetimingwrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '2%',
  },
  mosquetimings: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  timingtext: {
    fontSize: 29,
    color: 'white',
  },
  timingtext1: {
    fontSize: 27,
    color: 'orange',
  },
});

export default Namaaztiming;
