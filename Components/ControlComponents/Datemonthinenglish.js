import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Engclockdate from './Engclockdate';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Currentdayeng from '../Controls/Currentdayeng';
import Currentdayarabic from '../Controls/Currentdayarabic';
import Currentmontheng from '../Controls/Currentmontheng';
import DefaultPreference from 'react-native-default-preference';
import {Arabicyear} from '../Controls/Arabicdates';

const Datemonthinenglish = () => {
  const [font, setFont] = useState('');
  const [language, setLanguage] = useState('');
  const [currmonthArabic, setCurrentmonthArabic] = useState('');

  useEffect(() => {
    setCurrentmonthArabic(Arabicyear(1, 'month', 1));
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
    <View style={styles.monthdateenglish}>
      <View style={styles.monthdayenglish}>
        {language == 'Arabic' ? (
          <Text style={[styles.monthenglish, {fontFamily: font}]}>
            {currmonthArabic}
          </Text>
        ) : (
          <Currentmontheng
            style={[styles.monthenglish, {fontFamily: font}]}
            shortmonth={'value'}
          />
        )}

        {language == 'Arabic' ? (
          <Currentdayarabic style={[styles.dayenglish, {fontFamily: font}]} />
        ) : (
          <Currentdayeng
            style={[styles.dayenglish, {fontFamily: font}]}
            shortdate={'value'}
          />
        )}
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
    fontSize: 26,

    alignSelf: 'center',
  },
  dayenglish: {
    color: 'white',
    fontSize: 26,

    alignSelf: 'center',
  },
  dateinenglishtxt: {
    color: 'white',
    fontSize: 26,

    alignSelf: 'center',
  },
});

export default Datemonthinenglish;
