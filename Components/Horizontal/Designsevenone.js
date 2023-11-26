import React, {useEffect, useState} from 'react';
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
import Arabicclockdate from '../ControlComponents/Arabicclockdate';
import Engclockdate from '../ControlComponents/Engclockdate';
import Currentdayeng from '../Controls/Currentdayeng';
import Iqamaafter from '../Controls/Iqamaafter';
import Nextazaan from '../Controls/Nextazaan';
import Jumuatime from '../Controls/Jumuatime';
import Shawwaltime from '../Controls/Shawwaltime';
import Fajrtime from '../Controls/Fajrtime';
import Dhuhrtime from '../Controls/Dhuhrtime';
import Asrtime from '../Controls/Asrtime';
import Maghribtime from '../Controls/Maghribtime';
import Ishatime from '../Controls/Ishatime';

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
import Nextazaantext from '../Controls/Nextazaantext';
import Iqamaaftertext from '../Controls/Iqamaaftertext';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';
import DefaultPreference from 'react-native-default-preference';

const Designsevenone = ({navigation}) => {
  const [font, setFont] = useState('');

  function getFont() {
    try {
      DefaultPreference.get('font').then(function (value) {
        setFont(value);
      });
    } catch (e) {
      // error reading value
    }
  }
  useEffect(() => {
    getFont();
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
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/Horizontal/Designseven/bgsevenone.png')}>
        <View style={styles.maincontainer}>
          <View style={styles.containertop}>
            <View style={styles.leftone}>
              <Advertisement />
            </View>
            <View style={styles.rightone}>
              <View style={styles.rightoneinner}>
                <View style={styles.rightoneinnerone}>
                  <View style={styles.bone}>
                    <Arabicclockdate
                      style={[styles.Arabicdatetext, {fontFamily: font}]}
                    />
                  </View>
                  <View style={styles.btwo}>
                    <Engclockdate
                      style={[styles.Englishdatetext, {fontFamily: font}]}
                    />
                  </View>
                </View>
                <View style={styles.rightoneinnertwo}>
                  <Currentdayeng
                    style={[styles.DayofWeek, {fontFamily: font}]}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.containermiddle}>
            <View style={styles.lefttwo}>
              <Iqamaaftertext style={[styles.Iqamatext, {fontFamily: font}]} />
              <Iqamaafter style={[styles.Iqamatime, {fontFamily: font}]} />
              <Nextazaantext
                style={[styles.NextAzantext, {fontFamily: font}]}
              />
              <Nextazaan style={[styles.Nextazaantime, {fontFamily: font}]} />
            </View>
            <View style={styles.middletwo}>
              <Jumuatext style={[styles.Iqamatext, {fontFamily: font}]} />
              <Jumuatime style={[styles.Iqamatime, {fontFamily: font}]} />
              <Shuruqtext style={[styles.NextAzantext, {fontFamily: font}]} />
              <Shawwaltime style={[styles.Nextazaantime, {fontFamily: font}]} />
            </View>
            <View style={styles.righttwo}>
              <Image
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designfive/ctwo.png')}
              />
            </View>
          </View>
          <View style={styles.containersecondlast}>
            <View style={styles.middlethree}>
              <Clockdesigntwo />
            </View>
          </View>
          <View style={styles.containerbottom}>
            <View style={styles.aone}>
              <Fajrtext style={[styles.Namaaztext, {fontFamily: font}]} />
              <Fajrtime style={[styles.Namaaztime, {fontFamily: font}]} />
            </View>
            <View style={styles.aone}>
              <Dhuhrtext style={[styles.Namaaztext, {fontFamily: font}]} />
              <Dhuhrtime style={[styles.Namaaztime, {fontFamily: font}]} />
            </View>
            <View style={styles.aone}>
              <Asrtext style={[styles.Namaaztext, {fontFamily: font}]} />
              <Asrtime style={[styles.Namaaztime, {fontFamily: font}]} />
            </View>
            <View style={styles.aone}>
              <Maghribtext style={[styles.Namaaztext, {fontFamily: font}]} />
              <Maghribtime style={[styles.Namaaztime, {fontFamily: font}]} />
            </View>
            <View style={styles.aone}>
              <Ishatext style={[styles.Namaaztext, {fontFamily: font}]} />
              <Ishatime style={[styles.Namaaztime, {fontFamily: font}]} />
            </View>
          </View>
          <View style={styles.containerlast}>
            <View style={styles.middlelast}>
              <Text style={[styles.headermosquename, {fontFamily: font}]}>
                Mosque Name
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Designsevenone;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: '1%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containertop: {
    height: '20%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containermiddle: {
    height: '40%',
    flexDirection: 'row',
  },
  containersecondlast: {
    height: '10%',
    flexDirection: 'row',
  },
  containerbottom: {
    height: '22%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: '2%',
  },
  containerlast: {
    height: '8%',
    flexDirection: 'row',
  },
  leftone: {
    flex: 1,
  },
  rightone: {
    flex: 1,
    paddingTop: '2%',
  },
  rightoneinner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightoneinnerone: {
    flex: 1,
    flexDirection: 'column',
  },
  rightoneinnertwo: {
    flex: 1,
    flexDirection: 'row',
  },
  bone: {},
  btwo: {},
  lefttwo: {
    width: '25%',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingTop: '3%',
    paddingLeft: '4%',
  },
  middletwo: {
    width: '25%',
    paddingTop: '3%',
    paddingRight: '11%',
  },
  righttwo: {
    width: '50%',
  },
  middlethree: {
    flex: 1,
    alignSelf: 'center',
  },
  aone: {
    flex: 1,
    flexDirection: 'column',
  },
  middlelast: {
    flex: 1,
  },
  headermosquename: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 23,
  },
  Arabicdatetext: {
    color: 'white',
    fontSize: 25,

    alignSelf: 'center',
  },
  Englishdatetext: {
    color: 'white',
    fontSize: 25,

    alignSelf: 'center',
  },
  DayofWeek: {
    color: 'white',
    fontSize: 27,

    alignSelf: 'center',
  },
  Iqamatext: {
    color: 'white',
    fontSize: 27,

    alignSelf: 'center',
  },
  Iqamatime: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
  NextAzantext: {
    color: 'white',
    fontSize: 27,

    alignSelf: 'center',
  },
  Nextazaantime: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
  Namaaztext: {
    color: 'white',
    fontSize: 30,

    alignSelf: 'center',
  },
  Namaaztime: {
    color: 'white',
    fontSize: 28,

    alignSelf: 'center',
  },
  layernineimg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
