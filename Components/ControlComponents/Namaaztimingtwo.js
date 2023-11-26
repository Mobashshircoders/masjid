import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Fajrtime from '../Controls/Fajrtime';
import Dhuhrtime from '../Controls/Dhuhrtime';
import Asrtime from '../Controls/Asrtime';
import Maghribtime from '../Controls/Maghribtime';
import Ishatime from '../Controls/Ishatime';
import Jumuatime from '../Controls/Jumuatime';
import Fajrtext from '../Controls/Fajrtext';
import Dhuhrtext from '../Controls/Dhuhrtext';
import Asrtext from '../Controls/Asrtext';
import Maghribtext from '../Controls/Maghribtext';
import Ishatext from '../Controls/Ishatext';
import Jumuatext from '../Controls/Jumuatext';
import Shuruqtext from '../Controls/Shuruqtext';
import DefaultPreference from 'react-native-default-preference';

const Namaaztimingtwo = () => {
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
      <View style={styles.textazanvertical}>
        <Fajrtime style={[styles.azantime, {fontFamily: font}]} />
        <Dhuhrtime style={[styles.azantime, {fontFamily: font}]} />
        <Asrtime style={[styles.azantime, {fontFamily: font}]} />
        <Maghribtime style={[styles.azantime, {fontFamily: font}]} />
        <Ishatime style={[styles.azantime, {fontFamily: font}]} />
        <Jumuatime style={[styles.azantime, {fontFamily: font}]} />
      </View>
      <View style={styles.in2}>
        <Fajrtext style={[styles.namaaztext, {fontFamily: font}]} />
        <Dhuhrtext style={[styles.namaaztext, {fontFamily: font}]} />
        <Asrtext style={[styles.namaaztext, {fontFamily: font}]} />
        <Maghribtext style={[styles.namaaztext, {fontFamily: font}]} />
        <Ishatext style={[styles.namaaztext, {fontFamily: font}]} />
        <Jumuatext style={[styles.namaaztext, {fontFamily: font}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mosquetimingwrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '1%',
  },
  textazanvertical: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  in2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  azantime: {
    color: '#f75a4f',
    fontSize: 37,
  },
  namaaztext: {
    color: 'white',
    fontSize: 37,

    alignSelf: 'center',
  },
});

export default Namaaztimingtwo;
