import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Shawwaltime from '../Controls/Shawwaltime';
import Shuruqtext from '../Controls/Shuruqtext';
import DefaultPreference from 'react-native-default-preference';

const Nextnamaaztime = () => {
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
    <View style={styles.nextnamaaztime}>
      <Shuruqtext style={[styles.nextnamaaznametxt, {fontFamily: font}]} />
      <Shawwaltime style={[styles.nextnamaaztimetxt, {fontFamily: font}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  nextnamaaztime: {
    flex: 1,
    flexDirection: 'column',
  },
  nextnamaaznametxt: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
  nextnamaaztimetxt: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
});

export default Nextnamaaztime;
