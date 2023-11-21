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
import Currentyeareng from '../Controls/Currentyeareng';
import Currentdateandmontheng from '../Controls/Currentdateandmontheng';
import Currentyeararabic from '../Controls/Currentyeararabic';
import Currentmontharabic from '../Controls/Currentmontharabic';
import Currentdatearabic from '../Controls/Currentdatearabic';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';
import Namaaztimeverticalfivetime from '../ControlComponents/Namaaztimeverticalfivetime';

const Verticalfour = ({navigation}) => {
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
      source={require('../../assets/images/Vertical/four/Vbgfour.png')}>
      <View style={styles.maincontainer}>
        <View style={styles.one}>
          <Image
            style={styles.layernineimg}
            source={require('../../assets/images/Vertical/four/Vlogofourtrans.png')}></Image>
        </View>
        <View style={styles.two}>
          <View style={styles.rowstyle}>
            <View style={styles.colstyle}>
              <Currentmontheng style={styles.DayofWeek1} />
              <Currentyeareng style={styles.DayofWeek} />
            </View>
            <View style={styles.colstyle}>
              <Currentdayeng style={styles.DayofWeek1} />
              <Currentdateandmontheng style={styles.DayofWeek} />
            </View>
          </View>
        </View>
        <View style={styles.three}>
          <Clockdesigncommon
            clockone={styles.clockone}
            clocktwo={styles.clocktwo}
          />
        </View>
        <View style={styles.four}>
          <Currentyeararabic style={styles.DayofWeek2} />
          <Currentmontharabic style={styles.DayofWeek1} />
          <Currentdatearabic style={styles.DayofWeek2} />
        </View>
        <View style={styles.five}>
          <View style={styles.rowstyle}>
            <View>
              <Azaantext style={styles.timingtext} />
            </View>
            <View>
              <Salattext style={styles.timingtext} />
            </View>
            <View>
              <Iqamatext style={styles.timingtext} />
            </View>
          </View>
        </View>

        <View style={styles.six}>
          <View style={styles.rowstyle1}>
            <View>
              <Azaantimingvertical />
            </View>
            <View style={{paddingLeft: '4%'}}>
              <Namaazprayernamewhite />
            </View>
            <View>
              <Namaaztimeverticalfivetime />
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
export default Verticalfour;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: '11%',
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
  },

  four: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  five: {
    flex: 1,
  },

  six: {
    flex: 9,
    paddingTop: '3%',
  },

  seven: {
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
    justifyContent: 'space-around',
  },
  DayofWeek: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeek1: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeek2: {
    color: 'black',
    fontSize: 33,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Englishdatetext: {
    color: 'black',
    fontSize: 34,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Arabicdatetext: {
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
    color: 'black',
    fontFamily: 'JetBrainsMono-Bold',
  },
  NextAzantext: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Nextazaantime: {
    color: 'black',
    fontSize: 27,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  headermosquename: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 23,
  },
  clockone: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
  },
  clocktwo: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  beforelayernine: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingTop: '2%',
  },
});
