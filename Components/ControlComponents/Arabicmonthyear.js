import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Currentdatearabic from '../Controls/Currentdatearabic';
import Currentmontharabic from '../Controls/Currentmontharabic';
import Currentyeararabic from '../Controls/Currentyeararabic';
import DefaultPreference from 'react-native-default-preference';
import {Arabicyear} from '../Controls/Arabicdates';

const Arabicmonthyear = () => {
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
    <View style={styles.container}>
      <View style={styles.textdate}>
        <Currentdatearabic style={[styles.arabicdate, {fontFamily: font}]} />
      </View>

      <View style={styles.arabicyearview}>
        <Text style={[styles.arabicmonthname, {fontFamily: font}]}>
          {currmonthArabic}
        </Text>

        <Currentyeararabic style={[styles.arabicyear, {fontFamily: font}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingLeft: '15%',
    paddingTop: '1%',
  },
  arabicyearview: {
    flexDirection: 'column',
    flex: 1,
  },
  textdate: {},
  arabicdate: {
    color: 'white',
    fontSize: 70,

    alignSelf: 'center',
  },
  arabicmonthname: {
    color: 'white',
    fontSize: 35,

    alignSelf: 'center',
  },
  arabicyear: {
    color: 'white',
    fontSize: 35,

    alignSelf: 'center',
  },
});

export default Arabicmonthyear;
