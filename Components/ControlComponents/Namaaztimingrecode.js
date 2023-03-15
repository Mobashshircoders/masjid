import React from 'react';
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

const Namaaztimingrecode = () => {
  return (
    <View style={styles.mosquetimingwrapper}>
      <View style={styles.mosquetimings}>
        <Azaantext style={styles.timingtext} />
        <Salattext style={styles.timingtext} />
        <Iqamatext style={styles.timingtext} />
      </View>
      <View style={styles.mosquetimings}>
        <Fajrazaantime style={styles.timingtext1} />
        <Fajrtext style={styles.timingtext} />
        <Fajrtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Dhuhrazaantime style={styles.timingtext1} />
        <Dhuhrtext style={styles.timingtext} />
        <Dhuhrtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Asrazaantime style={styles.timingtext1} />
        <Asrtext style={styles.timingtext} />
        <Asrtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Maghribazaantime style={styles.timingtext1} />
        <Maghribtext style={styles.timingtext} />
        <Maghribtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Ishaazaantime style={styles.timingtext1} />
        <Ishatext style={styles.timingtext} />
        <Ishatime style={styles.timingtext1} />
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
    fontFamily: 'JetBrainsMono-Bold',
  },
  timingtext1: {
    fontSize: 34,
    color: 'orange',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
});

export default Namaaztimingrecode;
