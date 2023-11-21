import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import Mosquename from '../ControlComponents/Mosquename';
import Namaaztiming from '../ControlComponents/Namaaztiming';
import Clockdesign from '../ControlComponents/Clockdesign';
import Advertisement from '../ControlComponents/Advertisement';
import Nextnamaaztime from '../ControlComponents/Nextnamaaztime';
import Datemonthinenglish from '../ControlComponents/Datemonthinenglish';
import Arabicmonthyear from '../ControlComponents/Arabicmonthyear';
// import Nextazaan from '../ControlComponents/Nextazaan';
import Jumatime from '../ControlComponents/Jumatime';
import Clockdesigntwo from '../ControlComponents/Clockdesigntwo';
import Designninebase from './Designninebase';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Designninetwo = ({navigation}) => {
  useEffect(() => {
    setInterval(() => {
      var _data = new Iqamatime();
      //console.log('tempcheck');

      _data.getiqamaafter().then(tim => {
        if (tim == '-1') {
          navigation.navigate('Imageslider');
        }
      });
      //console.log(tim);

      //this.setState({Nextazaan: new Date().getHours()});
    }, 6000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <Designninebase imgpath={'two'} />
    </SafeAreaView>
  );
};
export default Designninetwo;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
