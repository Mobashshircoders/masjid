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
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Designtwo = ({navigation}) => {
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
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/images/Horizontal/Designone/background1.png')}>
        <View style={styles.maincontainer}>
          <View style={styles.container1}>
            <View style={styles.topleft}>
              <Clockdesign />
            </View>
            <View style={styles.topright}>
              <View style={styles.toprightwrapper}>
                <View style={styles.trone}>
                  <Nextnamaaztime />
                </View>
                <View style={styles.trtwo}>
                  <Datemonthinenglish />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bottomleft}>
              <View style={styles.leftone}>
                <Advertisement />
              </View>
              <View style={styles.lefttwo}>
                <View style={styles.leftinnercontainer}>
                  <View style={styles.leftinnerone}>
                    <Arabicmonthyear />
                  </View>
                  <View style={styles.leftinnertwo}>
                    <Nextazaanctrl />
                  </View>
                  <View style={styles.leftinnerthree}>
                    <Jumatime />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bottomright}>
              <View style={styles.rightinnercontainer}>
                <View style={styles.rightinnerone}>
                  <Namaaztiming />
                </View>
                <View style={styles.rightinnertwo}>
                  <Mosquename />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Designtwo;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title1: {
    fontSize: 70,
    padding: 15,
    color: 'white',

    textAlign: 'center',
    fontFamily: 'GEDinar',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  container1: {
    flexDirection: 'row',
    height: '23%',
  },
  container2: {
    flexDirection: 'row',
    height: '77%',
  },
  topleft: {
    flex: 1,
  },
  topright: {
    flex: 1,
    flexDirection: 'row',
  },
  toprightwrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: '5%',
    paddingBottom: '4%',
    paddingLeft: '4%',
    paddingRight: '6%',
  },
  bottomleft: {
    flex: 1,
    flexDirection: 'column',
  },
  bottomright: {
    flex: 1,
  },
  trone: {
    flex: 1,
  },
  trtwo: {
    flex: 1,
  },
  leftone: {
    height: '22%',
  },
  lefttwo: {
    height: '78%',
    flexDirection: 'column',
    //backgroundColor: 'green',
  },

  leftinnerone: {
    height: '40%',
  },
  leftinnertwo: {
    height: '30%',
    flexDirection: 'row',
  },
  leftinnerthree: {
    height: '30%',
    flexDirection: 'row',
  },
  leftinnercontainer: {
    paddingTop: '3%',
    paddingBottom: '4%',
    paddingLeft: '5%',
    paddingRight: '3%',
  },
  rightinnercontainer: {
    paddingTop: '3%',
    paddingBottom: '4%',
    paddingLeft: '4%',
    paddingRight: '5%',
    flexDirection: 'column',
  },
  rightinnerone: {
    height: '90%',
  },
  rightinnertwo: {
    height: '10%',
  },
});
