import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Nextazaan from '../Controls/Nextazaan';
import Iqamaafter from '../Controls/Iqamaafter';

const Nextazaanctrl = () => {
  return (
    <View style={styles.container1}>
      <View style={styles.nextazaanview}>
        <Text style={styles.nextazaantext}>Next Azaan</Text>
        <Nextazaan style={styles.nextazaantime} />
      </View>

      <View style={styles.iqamaafterview}>
        <Text style={styles.iqamaaftertext}>Iqama After</Text>
        <Iqamaafter style={styles.iqamaaftertime} />
      </View>
    </View>
  );
};

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
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  nextazaantime: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  iqamaaftertext: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  iqamaaftertime: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
});

export default Nextazaanctrl;
