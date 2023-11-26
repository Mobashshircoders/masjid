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

const Namaaztimeverticalfivetime = () => {
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
        <Fajrtext style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Dhuhrtext style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Asrtext style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Maghribtext style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
      <View style={styles.mosquetimings}>
        <Ishatext style={[styles.timingtext1, {fontFamily: font}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mosquetimingwrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  mosquetimings: {
    flex: 1,
  },
  timingtext: {
    fontSize: 32,
    color: 'white',
  },
  timingtext1: {
    fontSize: 36,
    color: 'orange',
  },
});

export default Namaaztimeverticalfivetime;
