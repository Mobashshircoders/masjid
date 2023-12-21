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
import Nextazaan from '../Controls/Nextazaan';
import Jumatime from '../ControlComponents/Jumatime';
import Clockdesigntwo from '../ControlComponents/Clockdesigntwo';
import Clockdesignthree from '../ControlComponents/Clockdesignthree';
import Designninebase from './Designninebase';
import Engclockdate from '../ControlComponents/Engclockdate';
import Arabicclockdate from '../ControlComponents/Arabicclockdate';
import Iqamaafter from '../Controls/Iqamaafter';
import Currentdayeng from '../Controls/Currentdayeng';
import Nextazaantext from '../Controls/Nextazaantext';
import Iqamaaftertext from '../Controls/Iqamaaftertext';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';
import DefaultPreference from 'react-native-default-preference';
import Currentdayarabic from '../Controls/Currentdayarabic';
import {Arabicyear} from '../Controls/Arabicdates';

const Designeightbasetwo = ({navigation}) => {
  const [font, setFont] = useState('');
  const [language, setLanguage] = useState('');
  const [currmonthArabic, setCurrentmonthArabic] = useState('');

  function getFont() {
    try {
      DefaultPreference.get('font').then(function (value) {
        setFont(value);
      });
    } catch (e) {
      // error reading value
    }
  }

  function getLanguage() {
    try {
      DefaultPreference.get('language').then(function (value) {
        setLanguage(value);
      });
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    setCurrentmonthArabic(Arabicyear(1, 'month', 1));
    getFont();
    getLanguage();
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
        source={require('../../assets/images/Horizontal/Designfour/bg.png')}>
        <View style={styles.maincontainer}>
          <View style={styles.cr1}></View>
          <View style={styles.cr2}>
            {language == 'Arabic' ? (
              <Currentdayarabic style={[styles.dayname, {fontFamily: font}]} />
            ) : (
              <Currentdayeng style={[styles.dayname, {fontFamily: font}]} />
            )}
          </View>
          <View style={styles.cr3}>
            <Arabicclockdate style={[styles.arabicdate, {fontFamily: font}]} />
            <View style={styles.horizontalline}></View>
            <Engclockdate style={[styles.arabicdate, {fontFamily: font}]} />
          </View>
          <View style={styles.cr4}>
            <Image
              style={styles.layernineimg}
              source={require('../../assets/images/Horizontal/Designfour/cdesignfour.png')}
            />
          </View>
          <View style={styles.cr5}>
            <Clockdesignthree />
          </View>
          <View style={styles.cr6}>
            <View style={styles.vertical1}>
              <Nextazaantext style={[styles.dayname, {fontFamily: font}]} />
              <Nextazaan style={[styles.dayname, {fontFamily: font}]} />
            </View>

            <View style={styles.verticalline}></View>
            <View style={styles.vertical1}>
              <Iqamaaftertext style={[styles.dayname, {fontFamily: font}]} />
              <Iqamaafter style={[styles.dayname, {fontFamily: font}]} />
            </View>
          </View>
          <View style={styles.cr7}>
            <Text style={[styles.headermosquename, {fontFamily: font}]}>
              Mosque Name
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Designeightbasetwo;
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
