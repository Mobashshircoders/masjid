import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Mosquename = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'right',
    color: 'white',
    fontSize: 20,
    paddingTop: '2%',
  },
});

export default Mosquename;
