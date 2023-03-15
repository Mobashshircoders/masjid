import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Shawwaltime from '../Controls/Shawwaltime';

const Nextnamaaztime = () => {
  return (
    <View style={styles.nextnamaaztime}>
      <Text style={styles.nextnamaaznametxt}>Shuruq</Text>
      <Shawwaltime style={styles.nextnamaaztimetxt} />
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
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
  nextnamaaztimetxt: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'JetBrainsMono-ExtraBold',
    alignSelf: 'center',
  },
});

export default Nextnamaaztime;
