import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Jumuatime from '../Controls/Jumuatime';
import DefaultPreference from 'react-native-default-preference';

const Jumatime = () => {
  const [language, setLanguage] = useState('');
  const [font, setFont] = useState('');
  useEffect(() => {
    getFont();
    getLanguage();
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

  function getLanguage() {
    try {
      DefaultPreference.get('language').then(function (value) {
        setLanguage(value);
      });
    } catch (e) {
      // error reading value
    }
  }

  return (
    <View style={styles.container1}>
      {language == 'Arabic' ? (
        <Text style={[styles.jumatext, {fontFamily: font}]}>الجمعة</Text>
      ) : (
        <Text style={[styles.jumatext, {fontFamily: font}]}>AL Jumua</Text>
      )}

      <Jumuatime style={[styles.jumatimevalue, {fontFamily: font}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: '3%',
  },

  jumatext: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  jumatimevalue: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
});

export default Jumatime;
