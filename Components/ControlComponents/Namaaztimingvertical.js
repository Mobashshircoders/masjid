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

const Namaaztimingvertical = () => {
  return (
    <View style={styles.mosquetimingwrapper}>
      <View style={styles.mosquetimings}>
        <Fajrtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Dhuhrtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Asrtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Maghribtime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Ishatime style={styles.timingtext1} />
      </View>
      <View style={styles.mosquetimings}>
        <Shawwaltime style={styles.timingtext1} />
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
    fontSize: 30,
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
  },
  timingtext1: {
    fontSize: 30,
    color: 'orange',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
});

export default Namaaztimingvertical;
