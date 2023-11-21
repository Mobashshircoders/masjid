import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Currentdatearabic from '../Controls/Currentdatearabic';
import Currentmontharabic from '../Controls/Currentmontharabic';
import Currentyeararabic from '../Controls/Currentyeararabic';
import DefaultPreference from 'react-native-default-preference';

const Arabicmonthyear = () => {
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
    <View style={styles.container}>
      <View style={styles.textdate}>
        <Currentdatearabic style={styles.arabicdate} />
      </View>

      <View style={styles.arabicyearview}>
        <Currentmontharabic style={styles.arabicmonthname} />
        <Currentyeararabic style={styles.arabicyear} />
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
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
  arabicmonthname: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
  arabicyear: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
});

export default Arabicmonthyear;
