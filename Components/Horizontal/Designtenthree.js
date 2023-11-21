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
import Namaaztimingtwo from '../ControlComponents/Namaaztimingtwo';
import Currentdayeng from '../Controls/Currentdayeng';
import Arabicclockdate from '../ControlComponents/Arabicclockdate';
import Engclockdate from '../ControlComponents/Engclockdate';
import Nextazaan from '../Controls/Nextazaan';
import Iqamaafter from '../Controls/Iqamaafter';
import Nextazaantext from '../Controls/Nextazaantext';
import Iqamaaftertext from '../Controls/Iqamaaftertext';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Designtenthree = ({navigation}) => {
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
        source={require('../../assets/images/Horizontal/Designten/bgten.png')}>
        <View style={styles.maincontainer}>
          <View style={styles.containerleft}>
            <View style={styles.cr1}></View>
            <View style={styles.cr2}>
              <Currentdayeng style={styles.dayname} />
            </View>
            <View style={styles.cr3}>
              <Arabicclockdate style={styles.arabicdate} />

              <Engclockdate style={styles.arabicdate} />
            </View>
            <View style={styles.cr4}>
              <Image
                style={styles.layernineimg}
                source={require('../../assets/images/Horizontal/Designten/logoone.png')}
              />
            </View>
            <View style={styles.cr5}>
              <Clockdesign />
            </View>
            <View style={styles.cr6}>
              <View style={styles.vertical1}>
                <Nextazaantext style={styles.dayname} />
                <Nextazaan style={styles.dayname} />
              </View>

              <View style={styles.vertical1}>
                <Iqamaaftertext style={styles.dayname} />
                <Iqamaafter style={styles.dayname} />
              </View>
            </View>
            <View style={styles.cr7}>
              <Text style={styles.headermosquename}>Mosque Name</Text>
            </View>
          </View>
          <View style={styles.containerright}>
            <View style={styles.containertop}></View>
            <View style={styles.containermiddle}>
              <View style={styles.ct1}></View>
              <View style={styles.ct2}>
                <Namaaztimingtwo />
              </View>
              <View style={styles.ct3}></View>
            </View>
            <View style={styles.containerbottom}></View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Designtenthree;
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
    flex: 7,
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
    flex: 4,
  },
  cr5: {
    flex: 5,
  },
  cr6: {
    paddingTop: '2%',
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
