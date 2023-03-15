import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import Advertisementvertical from '../ControlComponents/Advertisementvertical';
import Advertisementcommon from '../ControlComponents/Advertisementcommon';

import Nextazaan from '../Controls/Nextazaan';
import Jumuatime from '../Controls/Jumuatime';
import Clockdesigntwo from '../ControlComponents/Clockdesigntwo';
import Clockdesignthree from '../ControlComponents/Clockdesignthree';
import Arabicclockdate from '../ControlComponents/Arabicclockdate';
import Engclockdate from '../ControlComponents/Engclockdate';
import Iqamaafter from '../Controls/Iqamaafter';
import Fajrtime from '../Controls/Fajrtime';
import Dhuhrtime from '../Controls/Dhuhrtime';
import Asrtime from '../Controls/Asrtime';
import Maghribtime from '../Controls/Maghribtime';
import Ishatime from '../Controls/Ishatime';
import Shawwaltime from '../Controls/Shawwaltime';
import Currentdayeng from '../Controls/Currentdayeng';
import Nextazaantext from '../Controls/Nextazaantext';
import Iqamaaftertext from '../Controls/Iqamaaftertext';
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
import Azaantimingvertical from '../ControlComponents/Azaantimingvertical';
import Namaaztimingvertical from '../ControlComponents/Namaaztimingvertical';
import Namaazprayername from '../ControlComponents/Namaazprayername';
import Namaazprayernamewhite from '../ControlComponents/Namaazprayernamewhite';
import Currentmontheng from '../Controls/Currentmontheng';
import Clockdesigncommon from '../ControlComponents/Clockdesigncommon';
import Currentdateeng from '../Controls/Currentdateeng';
import Currentyeareng from '../Controls/Currentyeareng';
import Currentdayarabic from '../Controls/Currentdayarabic';
import Currentdatearabic from '../Controls/Currentdatearabic';
import Currentmontharabic from '../Controls/Currentmontharabic';
import Currentyeararabic from '../Controls/Currentyeararabic';
import Namaaztimeverticalfivetime from '../ControlComponents/Namaaztimeverticalfivetime';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Verticalfivetwo = ({navigation}) => {
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
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/Vertical/one/Voneblackbg.png')}>
      <View style={styles.maincontainer}>
        <View style={styles.one}>
          <View style={styles.one1}>
            <Currentdateeng style={styles.DayofWeek1} />
            <Currentmontheng style={styles.DayofWeek} />
            <Currentyeareng style={styles.DayofWeek} />
          </View>
          <View style={styles.one2}>
            <View style={styles.onetopinner1}>
              <Clockdesigncommon
                clockone={styles.clockone}
                clocktwo={styles.clocktwo}
              />
            </View>
            <View style={styles.onetopinner2}>
              <Currentdayarabic style={styles.DayofWeek} />
              <Currentdayeng style={styles.DayofWeek} />
            </View>
          </View>
          <View style={styles.one3}>
            <Currentdatearabic style={styles.DayofWeek1} />
            <Currentmontharabic style={styles.DayofWeekless} />
            <Currentyeararabic style={styles.DayofWeek} />
          </View>
        </View>
        <View style={styles.two}>
          <Nextazaan style={styles.Nextazaantime} />
          <Nextazaantext style={styles.NextAzantext} />
        </View>
        <View style={styles.three}>
          <Iqamaafter style={styles.Nextazaantime} />
          <Iqamaaftertext style={styles.NextAzantext} />
        </View>
        <View style={styles.four}>
          <View style={styles.one1}>
            <View>
              <Azaantext style={styles.header12} />
            </View>
            <View style={styles.colstylecenter}>
              <Azaantimingvertical />
            </View>
          </View>
          <View style={styles.one21}>
            <View>
              <Salattext style={styles.header12} />
            </View>
            <View style={styles.colstyle}>
              <Namaazprayername />
            </View>
          </View>
          <View style={styles.one3}>
            <View>
              <Iqamatext style={styles.header12} />
            </View>
            <View style={styles.colstylecenter}>
              <Namaaztimeverticalfivetime />
            </View>
          </View>
        </View>
        <View style={styles.five}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1}}>
            <Shuruqtext style={styles.header12} />
          </View>
          <View style={{flex: 1}}>
            <Shawwaltime style={styles.header12} />
          </View>
        </View>

        <View style={styles.six}>
          <View style={{flex: 1}}></View>
          <View style={{flex: 1}}>
            <Jumuatext style={styles.header12} />
          </View>
          <View style={{flex: 1}}>
            <Jumuatime style={styles.header12} />
          </View>
        </View>
        <View style={styles.seven}>
          <Text style={styles.headermosquename}>Mosque Name</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Verticalfivetwo;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '5%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  heightgap: {
    flex: 1,
  },
  one: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  two: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },

  three: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },

  four: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },

  five: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },

  six: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '2%',
  },

  seven: {
    flex: 1,
  },
  one1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  one2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '2%',
  },
  one3: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '2%',
  },
  one21: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: '2%',
  },
  onetopinner1: {
    flex: 1,
    marginBottom: '1%',
  },
  onetopinner2: {
    flex: 2,
    flexDirection: 'column',
    marginTop: '2%',
  },
  colstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  colstylecenter: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft: '20%',
  },
  rowstyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowstyle1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  DayofWeek: {
    color: 'white',
    fontSize: 33,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeekless: {
    color: 'white',
    fontSize: 28,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeek1: {
    color: 'white',
    fontSize: 37,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Englishdatetext: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Arabicdatetext: {
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
    marginLeft: '4%',
    marginRight: '4%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  layernineimg1: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    marginLeft: '4%',
    marginRight: '4%',
  },
  layernineimglogo: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    paddingTop: '1%',
  },
  imglogo: {
    flex: 1,
    alignSelf: 'center',
  },
  timingtext: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
  },
  NextAzantext: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  header12: {
    color: 'white',
    fontSize: 34,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Nextazaantime: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  headermosquename: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 23,
  },
  clockone: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  clocktwo: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  beforelayernine: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
  },
});
