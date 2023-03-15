import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Jumuatime from '../Controls/Jumuatime';

const Jumatime = () => {
  return (
    <View style={styles.container1}>
      <Text style={styles.jumatext}>AL Jumua</Text>

      <Jumuatime style={styles.jumatimevalue} />
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
