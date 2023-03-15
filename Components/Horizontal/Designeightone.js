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
import Nextazaanctrl from '../ControlComponents/Nextazaanctrl';
import Jumatime from '../ControlComponents/Jumatime';
import Clockdesigntwo from '../ControlComponents/Clockdesigntwo';
import Clockdesignthree from '../ControlComponents/Clockdesignthree';
import Designeightbase from './Designeightbase';
import Designeightbasetwo from './Designeightbasetwo';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Designeightone = ({navigation}) => {
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
    }, 600000);
  });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/Horizontal/Designfour/bg.png')}>
        <View style={styles.maincontainer}>
          <View style={styles.containerleft}>
            <Designeightbase />
          </View>
          <View style={styles.containerright}>
            <Designeightbasetwo />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Designeightone;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'row',
  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerleft: {
    flexDirection: 'column',
    width: '50%',
    justifyContent: 'space-around',
  },
  containerright: {
    flexDirection: 'column',
    width: '50%',
  },
  containertop: {
    flex: 1,
  },
  containermiddle: {
    flex: 7,
    flexDirection: 'row',
  },
  containerbottom: {
    flex: 1,
  },
  ij1: {
    flex: 3,
  },
  ij2: {
    flex: 1,
  },
  ij3: {
    flex: 3,
  },
  cr1: {
    flex: 3,
  },
  cr2: {
    flex: 2,
  },
  cr3: {
    flex: 6,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  cr4: {
    flex: 10,
  },
  cr5: {
    flex: 4,
  },
  cr6: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: '16%',
    marginRight: '16%',
  },
  cr7: {
    flex: 2,
  },

  dayname: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  arabicdate: {
    color: 'black',
    fontSize: 27,
    fontFamily: 'JetBrainsMono-Bold',
    alignSelf: 'center',
  },
  horizontalline: {
    width: '60%',
    height: 1,
    backgroundColor: '#909090',
    alignSelf: 'center',
  },
  vertical1: {
    flex: 4,
    flexDirection: 'column',
  },
  verticalline: {
    height: '60%',

    width: 1,
    backgroundColor: '#909090',
    alignSelf: 'center',
  },
  texthorizontal: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textazanvertical: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textazanrect: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'AbdoullahAshgar',
  },
  azantime: {
    color: '#f75a4f',
    fontSize: 28,
    fontFamily: 'JetBrainsMono-Bold',
  },
  namaaztext: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  bottomtext: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  layernineimg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  headermosquename: {
    alignSelf: 'flex-end',
    marginRight: '5%',
    color: 'black',
    fontSize: 23,
    fontFamily: 'AbdoullahAshgar',
  },
});
