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

const Namaaztiming = () => {
  return (
    <View style={styles.mosquetimingwrapper}>
      <View style={styles.mosquetimings}>
        <Azaantext style={styles.timingtext} />
        <Fajrazaantime style={styles.timingtext1} />
        <Dhuhrazaantime style={styles.timingtext1} />
        <Asrazaantime style={styles.timingtext1} />
        <Maghribazaantime style={styles.timingtext1} />
        <Ishaazaantime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Salattext style={styles.timingtext} />
        <Fajrtext style={styles.timingtext} />
        <Dhuhrtext style={styles.timingtext} />
        <Asrtext style={styles.timingtext} />
        <Maghribtext style={styles.timingtext} />
        <Ishatext style={styles.timingtext} />
      </View>
      <View style={styles.mosquetimings}>
        <Iqamatext style={styles.timingtext} />
        <Fajrtime style={styles.timingtext1} />
        <Dhuhrtime style={styles.timingtext1} />
        <Asrtime style={styles.timingtext1} />
        <Maghribtime style={styles.timingtext1} />
        <Ishatime style={styles.timingtext1} />
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
    fontFamily: 'JetBrainsMono-Bold',
  },
  timingtext1: {
    fontSize: 27,
    color: 'orange',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
});

export default Namaaztiming;
