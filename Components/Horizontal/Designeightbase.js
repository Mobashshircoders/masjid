import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import Fajrazaantime from '../Controls/Fajrazaantime';
import Dhuhrazaantime from '../Controls/Dhuhrazaantime';
import Asrazaantime from '../Controls/Asrazaantime';
import Maghribazaantime from '../Controls/Maghribazaantime';
import Ishaazaantime from '../Controls/Ishaazaantime';

import Fajrtime from '../Controls/Fajrtime';
import Dhuhrtime from '../Controls/Dhuhrtime';
import Asrtime from '../Controls/Asrtime';
import Maghribtime from '../Controls/Maghribtime';
import Ishatime from '../Controls/Ishatime';
import Jumuatime from '../Controls/Jumuatime';
import Shawwaltime from '../Controls/Shawwaltime';

import Fajrtext from '../Controls/Fajrtext';
import Dhuhrtext from '../Controls/Dhuhrtext';
import Asrtext from '../Controls/Asrtext';
import Maghribtext from '../Controls/Maghribtext';
import Ishatext from '../Controls/Ishatext';
import Jumuatext from '../Controls/Jumuatext';
import Shuruqtext from '../Controls/Shuruqtext';
import Azaantext from '../Controls/Azaantext';
import Salattext from '../Controls/Salattext';
import Iqamatext from '../Controls/Iqamatext';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';
import DefaultPreference from 'react-native-default-preference';

const Designeightbase = ({navigation}) => {
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
    <View style={styles.maincontainer}>
      <View style={styles.containertop}></View>
      <View style={styles.containermiddle}>
        <View style={styles.ct1}></View>
        <View style={styles.ct2}>
          <View style={styles.cd1}>
            <ImageBackground
              style={styles.layernineimg}
              source={require('../../assets/images/Horizontal/Designfour/horizontalbartop.png')}>
              <View style={styles.texthorizontal}>
                <Azaantext style={[styles.header, {fontFamily: font}]} />
                <Salattext style={[styles.header, {fontFamily: font}]} />
                <Iqamatext style={[styles.header, {fontFamily: font}]} />
              </View>
            </ImageBackground>
          </View>
          <View style={styles.cd2}>
            <View style={styles.in1}>
              <ImageBackground
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designfour/verticalbar.png')}>
                <View style={styles.textazanvertical}>
                  <Fajrazaantime
                    style={[styles.azantime, {fontFamily: font}]}
                  />
                  <Dhuhrazaantime
                    style={[styles.azantime, {fontFamily: font}]}
                  />
                  <Asrazaantime style={[styles.azantime, {fontFamily: font}]} />
                  <Maghribazaantime
                    style={[styles.azantime, {fontFamily: font}]}
                  />
                  <Ishaazaantime
                    style={[styles.azantime, {fontFamily: font}]}
                  />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.in2}>
              <Fajrtext style={[styles.namaaztext, {fontFamily: font}]} />
              <Dhuhrtext style={[styles.namaaztext, {fontFamily: font}]} />
              <Asrtext style={[styles.namaaztext, {fontFamily: font}]} />
              <Maghribtext style={[styles.namaaztext, {fontFamily: font}]} />
              <Ishatext style={[styles.namaaztext, {fontFamily: font}]} />
            </View>
            <View style={styles.in3}>
              <ImageBackground
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designfour/verticalbar.png')}>
                <View style={styles.textazanvertical}>
                  <Fajrtime style={[styles.azantime, {fontFamily: font}]} />
                  <Dhuhrtime style={[styles.azantime, {fontFamily: font}]} />
                  <Asrtime style={[styles.azantime, {fontFamily: font}]} />
                  <Maghribtime style={[styles.azantime, {fontFamily: font}]} />
                  <Ishatime style={[styles.azantime, {fontFamily: font}]} />
                </View>
              </ImageBackground>
            </View>
          </View>
          <View style={styles.cd3}>
            <View style={styles.ij1}>
              <ImageBackground
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designfour/rectangularbar.png')}>
                <View style={styles.textazanrect}>
                  <Jumuatext style={[styles.bottomtext, {fontFamily: font}]} />
                  <Jumuatime style={[styles.bottomtext, {fontFamily: font}]} />
                </View>
              </ImageBackground>
            </View>
            <View style={styles.ij2}></View>
            <View style={styles.ij3}>
              <ImageBackground
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designfour/rectangularbar.png')}>
                <View style={styles.textazanrect}>
                  <Shuruqtext style={[styles.bottomtext, {fontFamily: font}]} />
                  <Shawwaltime
                    style={[styles.bottomtext, {fontFamily: font}]}
                  />
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.ct3}></View>
      </View>
      <View style={styles.containerbottom}></View>
    </View>
  );
};
export default Designeightbase;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
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
  ct1: {
    flex: 1,
  },
  ct2: {
    flex: 6,
    flexDirection: 'column',
  },
  ct3: {
    flex: 1,
  },
  cd1: {
    flex: 1,

    flexDirection: 'row',
  },
  cd2: {
    marginTop: '1%',
    flex: 5,

    flexDirection: 'row',
  },
  cd3: {
    flex: 2,
    flexDirection: 'row',
    marginTop: '1%',
  },
  in1: {
    flex: 1,
  },
  in2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  in3: {
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

  dayname: {
    color: 'black',
    fontSize: 24,

    alignSelf: 'center',
  },
  arabicdate: {
    color: 'black',
    fontSize: 27,

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
  },
  azantime: {
    color: '#f75a4f',
    fontSize: 28,
  },
  namaaztext: {
    color: 'black',
    fontSize: 28,

    alignSelf: 'center',
  },
  bottomtext: {
    color: 'black',
    fontSize: 28,

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
  },
});
