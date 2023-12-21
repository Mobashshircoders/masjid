import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Nextazaan from '../Controls/Nextazaan';
import Nextazaantext from '../Controls/Nextazaantext';

import Iqamaafter from '../Controls/Iqamaafter';
import Iqamaaftertext from '../Controls/Iqamaaftertext';
import DefaultPreference from 'react-native-default-preference';

const Nextazaanctrl = () => {
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
  const styles = StyleSheet.create({
    container1: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    nextazaanview: {
      flexDirection: 'column',
      flex: 1,
    },
    iqamaafterview: {
      flexDirection: 'column',
      flex: 1,
    },
    nextazaantext: {
      color: 'white',
      fontSize: 30,

      // fontFamily: customeStyle,

      alignSelf: 'center',
    },
    nextazaantime: {
      color: 'white',
      fontSize: 40,

      alignSelf: 'center',
    },
    iqamaaftertext: {
      color: 'white',
      fontSize: 30,

      alignSelf: 'center',
    },
    iqamaaftertime: {
      color: 'white',
      fontSize: 40,

      alignSelf: 'center',
    },
  });
  return (
    <View style={styles.container1}>
      <View style={styles.nextazaanview}>
        <Nextazaantext style={[styles.nextazaantext, {fontFamily: font}]} />
        <Nextazaan style={[styles.nextazaantime, {fontFamily: font}]} />
      </View>

      <View style={styles.iqamaafterview}>
        <Iqamaaftertext style={[styles.iqamaaftertext, {fontFamily: font}]} />
        <Iqamaafter style={[styles.iqamaaftertime, {fontFamily: font}]} />
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container1: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//   },
//   nextazaanview: {
//     flexDirection: 'column',
//     flex: 1,
//   },
//   iqamaafterview: {
//     flexDirection: 'column',
//     flex: 1,
//   },
//   nextazaantext: {
//     color: 'white',
//     fontSize: 30,
//     // fontFamily: 'AbdoullahAshgar',
//     fontFamily: defaultstyle1,
//     alignSelf: 'center',
//   },
//   nextazaantime: {
//     color: 'white',
//     fontSize: 40,
//     fontFamily: 'AbdoullahAshgar',
//     alignSelf: 'center',
//   },
//   iqamaaftertext: {
//     color: 'white',
//     fontSize: 30,
//     fontFamily: 'AbdoullahAshgar',
//     alignSelf: 'center',
//   },
//   iqamaaftertime: {
//     color: 'white',
//     fontSize: 40,
//     fontFamily: 'AbdoullahAshgar',
//     alignSelf: 'center',
//   },
// });

export default Nextazaanctrl;
