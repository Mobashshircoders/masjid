import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Advertisement = () => {
  return (
    <View style={styles.beforelayernine}>
      <Image
        style={styles.layernineimg}
        source={require('../../assets/images/Horizontal/Designone/layer9.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  beforelayernine: {
    flex: 1,
    paddingLeft: '6%',
    paddingRight: '5%',
    paddingTop: '2%',
    paddingBottom: '2%',
  },
  layernineimg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});

export default Advertisement;
