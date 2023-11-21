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
import Currentmontheng from '../Controls/Currentmontheng';
import Clockdesigncommon from '../ControlComponents/Clockdesigncommon';
import Currentdayurdu from '../Controls/Currentdayurdu';
import Currentmonthurdu from '../Controls/Currentmonthurdu';
import Currentdatearabic from '../Controls/Currentdatearabic';
import Currentyeareng from '../Controls/Currentyeareng';
import Currentdateandmontheng from '../Controls/Currentdateandmontheng';
import Namaaztimeverticalfivetime from '../ControlComponents/Namaaztimeverticalfivetime';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Verticalten = ({navigation}) => {
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
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/images/Vertical/ten/Vbgten.png')}>
      <View style={styles.maincontainer}>
        <View style={styles.one}>
          <Image
            style={styles.layernineimg}
            source={require('../../assets/images/Vertical/ten/Vlogotrans.png')}></Image>
        </View>
        <View style={styles.two}>
          <Clockdesigncommon
            clockone={styles.clockone}
            clocktwo={styles.clocktwo}
          />
        </View>
        <View style={styles.three}>
          <View style={styles.rowstyle}>
            <Currentmonthurdu style={styles.DayofWeek1} />
            <Currentdayurdu style={styles.DayofWeek} />
          </View>
        </View>
        <View style={styles.four}>
          <Engclockdate style={styles.Englishdatetext} />
        </View>

        <View style={styles.six}>
          <View style={styles.rowstyle1}>
            <View>
              <Namaaztimeverticalfivetime />
            </View>

            <View style={styles.mosquetimingwrapper1}>
              <View style={styles.mosquetimings}>
                <Text style={styles.timingtext}>فجر</Text>
              </View>
              <View style={styles.mosquetimings}>
                <Text style={styles.timingtext}>ظہر</Text>
              </View>
              <View style={styles.mosquetimings}>
                <Text style={styles.timingtext}>عصر</Text>
              </View>
              <View style={styles.mosquetimings}>
                <Text style={styles.timingtext}>مغرب</Text>
              </View>
              <View style={styles.mosquetimings}>
                <Text style={styles.timingtext}>عشا</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.seven}>
          <View style={styles.rowstyle}>
            <View style={styles.colstyle}>
              <Nextazaantext style={styles.NextAzantext} />
              <Nextazaan style={styles.Nextazaantime} />
            </View>
            <View style={styles.colstyle}>
              <View style={styles.colstyle}>
                <Jumuatext style={styles.NextAzantext} />
                <Jumuatime style={styles.Nextazaantime} />
              </View>
            </View>
            <View style={styles.colstyle}>
              <View style={styles.colstyle}>
                <Iqamaaftertext style={styles.NextAzantext} />
                <Iqamaafter style={styles.Nextazaantime} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.eight}>
          <Text style={styles.headermosquename}>Mosque Name</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Verticalten;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '10%',
    marginLeft: '12%',
    marginRight: '12%',
  },
  heightgap: {
    flex: 1,
  },
  one: {
    flex: 4,
  },

  two: {
    flex: 2,
  },

  three: {
    flex: 2,
    marginTop: '-4%',
  },

  four: {
    flex: 1,
    marginTop: '-4%',
  },

  five: {
    flex: 1,
  },

  six: {
    flex: 9,
  },
  nine: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ten: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  seven: {
    marginTop: '-3%',
    flex: 2,
  },

  eight: {
    flex: 1,
  },

  colstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  rowstyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rowstyle1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '17%',
  },
  DayofWeek: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },

  DayofWeek2: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeek1: {
    color: 'white',
    fontSize: 40,
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
    fontSize: 50,
    fontWeight: 'bold',
  },
  clocktwo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  beforelayernine: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
  },
  mosquetimingwrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  mosquetimingwrapper1: {
    flex: 1,
    flexDirection: 'column',
  },
  mosquetimings: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: '40%',
  },
  timingtext: {
    fontSize: 49,
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
  },
  timingtext1: {
    fontSize: 48,
    color: 'orange',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
});
