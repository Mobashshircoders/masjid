import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import Clockdesigntwo from '../ControlComponents/Clockdesigntwo';
import Clockdesignthree from '../ControlComponents/Clockdesignthree';
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

import Engclockdate from '../ControlComponents/Engclockdate';
import Arabicclockdate from '../ControlComponents/Arabicclockdate';
import Iqamaafter from '../Controls/Iqamaafter';
import Currentdayeng from '../Controls/Currentdayeng';
import Nextazaan from '../Controls/Nextazaan';
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

const Designeightthree = ({navigation}) => {
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
          <View style={styles.containerleft}>
            <View style={styles.containertop}></View>
            <View style={styles.containermiddle}>
              <View style={styles.ct1}></View>
              <View style={styles.ct2}>
                <View style={styles.cd1}>
                  <View style={styles.texthorizontal}>
                    <Azaantext style={styles.header} />
                    <Salattext style={styles.header} />
                    <Iqamatext style={styles.header} />
                  </View>
                </View>
                <View style={styles.cd2}>
                  <View style={styles.in1}>
                    <View style={styles.textazanvertical}>
                      <Fajrazaantime style={styles.azantime} />
                      <Dhuhrazaantime style={styles.azantime} />
                      <Asrazaantime style={styles.azantime} />
                      <Maghribazaantime style={styles.azantime} />
                      <Ishaazaantime style={styles.azantime} />
                    </View>
                  </View>
                  <View style={styles.in2}>
                    <Fajrtext style={styles.namaaztext} />
                    <Dhuhrtext style={styles.namaaztext} />
                    <Asrtext style={styles.namaaztext} />
                    <Maghribtext style={styles.namaaztext} />
                    <Ishatext style={styles.namaaztext} />
                  </View>
                  <View style={styles.in3}>
                    <View style={styles.textazanvertical}>
                      <Fajrtime style={styles.azantime} />
                      <Dhuhrtime style={styles.azantime} />
                      <Asrtime style={styles.azantime} />
                      <Maghribtime style={styles.azantime} />
                      <Ishatime style={styles.azantime} />
                    </View>
                  </View>
                </View>
                <View style={styles.cd3}>
                  <View style={styles.ij1}>
                    <View style={styles.textazanrect}>
                      <Jumuatext style={styles.bottomtext} />
                      <Jumuatime style={styles.bottomtext} />
                    </View>
                  </View>
                  <View style={styles.ij2}></View>
                  <View style={styles.ij3}>
                    <View style={styles.textazanrect}>
                      <Shuruqtext style={styles.bottomtext} />
                      <Shawwaltime style={styles.bottomtext} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.ct3}></View>
            </View>
            <View style={styles.containerbottom}></View>
          </View>
          <View style={styles.containerright}>
            <View style={styles.cr1}></View>
            <View style={styles.cr2}>
              <Currentdayeng style={styles.dayname} />
            </View>
            <View style={styles.cr3}>
              <Arabicclockdate style={styles.arabicdate} />
              <View style={styles.horizontalline}></View>
              <Engclockdate style={styles.arabicdate} />
            </View>
            <View style={styles.cr4}>
              <Image
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designfour/cdesignfour.png')}
              />
            </View>
            <View style={styles.cr5}>
              <Clockdesigntwo />
            </View>
            <View style={styles.cr6}>
              <View style={styles.vertical1}>
                <Nextazaantext style={styles.dayname} />
                <Nextazaan style={styles.dayname} />
              </View>

              <View style={styles.verticalline}></View>
              <View style={styles.vertical1}>
                <Iqamaaftertext style={styles.dayname} />
                <Iqamaafter style={styles.dayname} />
              </View>
            </View>
            <View style={styles.cr7}>
              <Text style={styles.headermosquename}>Mosque Name</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Designeightthree;
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
    color: 'white',
    fontSize: 24,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  arabicdate: {
    color: 'white',
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
    color: 'white',
    fontSize: 25,
    fontFamily: 'AbdoullahAshgar',
  },
  azantime: {
    color: '#f75a4f',
    fontSize: 28,
    fontFamily: 'JetBrainsMono-Bold',
  },
  namaaztext: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  bottomtext: {
    color: 'white',
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
    color: 'white',
    fontSize: 23,
    fontFamily: 'AbdoullahAshgar',
  },
});
