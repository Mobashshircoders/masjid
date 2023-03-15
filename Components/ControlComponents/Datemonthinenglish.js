import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Engclockdate from './Engclockdate';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Currentdayeng from '../Controls/Currentdayeng';
import Currentmontheng from '../Controls/Currentmontheng';

const Datemonthinenglish = () => {
  return (
    <View style={styles.monthdateenglish}>
      <View style={styles.monthdayenglish}>
        <Currentmontheng style={styles.monthenglish} shortmonth={'value'} />
        <Currentdayeng style={styles.dayenglish} shortdate={'value'} />
      </View>
      <View style={styles.dateinenglish}>
        <Engclockdate style={styles.dateinenglishtxt} />
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
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
  dayenglish: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
  dateinenglishtxt: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
});

export default Datemonthinenglish;
