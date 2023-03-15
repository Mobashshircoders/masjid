import React from 'react';
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

const Namaaztimingtwo = () => {
  return (
    <View style={styles.mosquetimingwrapper}>
      <View style={styles.textazanvertical}>
        <Fajrtime style={styles.azantime} />
        <Dhuhrtime style={styles.azantime} />
        <Asrtime style={styles.azantime} />
        <Maghribtime style={styles.azantime} />
        <Ishatime style={styles.azantime} />
        <Jumuatime style={styles.azantime} />
      </View>
      <View style={styles.in2}>
        <Fajrtext style={styles.namaaztext} />
        <Dhuhrtext style={styles.namaaztext} />
        <Asrtext style={styles.namaaztext} />
        <Maghribtext style={styles.namaaztext} />
        <Ishatext style={styles.namaaztext} />
        <Jumuatext style={styles.namaaztext} />
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
    fontFamily: 'JetBrainsMono-Bold',
  },
  namaaztext: {
    color: 'white',
    fontSize: 37,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
});

export default Namaaztimingtwo;
