import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Engclockdate from './Engclockdate';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Currentdayeng from '../Controls/Currentdayeng';
import Currentmontheng from '../Controls/Currentmontheng';
import DefaultPreference from 'react-native-default-preference';

const Datemonthinenglish = () => {
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
    <View style={styles.monthdateenglish}>
      <View style={styles.monthdayenglish}>
        <Currentmontheng
          style={[styles.monthenglish, {fontFamily: font}]}
          shortmonth={'value'}
        />
        <Currentdayeng
          style={[styles.dayenglish, {fontFamily: font}]}
          shortdate={'value'}
        />
      </View>
      <View style={styles.dateinenglish}>
        <Engclockdate style={[styles.dateinenglishtxt, {fontFamily: font}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  monthdateenglish: {
    flex: 1,
    flexDirection: 'column',
  },
  monthdayenglish: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  monthenglish: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
  dayenglish: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
  dateinenglishtxt: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
});

export default Datemonthinenglish;
