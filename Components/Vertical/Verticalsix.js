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
import Namaaztimeverticalfivetime from '../ControlComponents/Namaaztimeverticalfivetime';
import Namaazprayername from '../ControlComponents/Namaazprayername';
import Currentdateeng from '../Controls/Currentdateeng';
import Currentmonthnoeng from '../Controls/Currentmonthnoeng';
import Currentmontheng from '../Controls/Currentmontheng';
import Currentyeareng from '../Controls/Currentyeareng';
import Currentmontharabic from '../Controls/Currentmontharabic';
import Currentdayarabic from '../Controls/Currentdayarabic';
import Currentyeararabic from '../Controls/Currentyeararabic';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Verticalsix = ({navigation}) => {
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
      source={require('../../assets/images/Vertical/six/Vbgsix.png')}>
      <View style={styles.maincontainer}>
        <View style={styles.one}>
          <Advertisementvertical />
        </View>
        <View style={styles.two}>
          <View style={styles.imglogo}>
            <Image
              style={{width: 420, height: 120}}
              source={require('../../assets/images/Vertical/one/vonelogotrans.png')}></Image>
          </View>
        </View>
        <View style={styles.heightgap}></View>
        <View style={styles.three}>
          <View style={styles.rowstyle}>
            <View style={styles.colstyle}>
              <View style={{flex: 1}}></View>

              <View style={styles.rowstyleright}>
                <Currentdateeng style={styles.DayofWeek} />
              </View>
            </View>
            <View style={styles.colstyle}>
              <View style={{flex: 2}}>
                <Clockdesigntwo />
              </View>
              <View style={{flex: 1}}></View>
            </View>
            <View style={styles.colstyle}>
              <View style={{flex: 1}}></View>
              <View style={styles.rowstyleleft}>
                <Currentmonthnoeng style={styles.DayofWeek} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.four}>
          <View style={styles.rowstyle}>
            <View style={styles.colstyle}>
              <View style={styles.rowend}>
                <Currentmontheng style={styles.DayofWeeksmall} />
              </View>
              <View style={styles.rowend}>
                <Currentyeareng style={styles.DayofWeeksmall} />
              </View>
            </View>
            <View style={styles.colstyle002}>
              <Currentdayarabic style={styles.DayofWeeksmall} />
              <Currentdayeng style={styles.DayofWeeksmall} />
            </View>
            <View style={styles.colstyle}>
              <View style={styles.rowstart}>
                <Currentmontharabic style={styles.DayofWeeksmall} />
              </View>

              <View style={styles.rowstart}>
                <Currentyeararabic style={styles.DayofWeeksmall} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.five}>
          <View style={styles.mosquetimingwrapper}>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>Fajr</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>Dhuhr</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>Asr</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>Maghrib</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>Isha</Text>
            </View>
          </View>
          <View style={styles.mosquetimingwrapper12}>
            <Namaaztimeverticalfivetime />
          </View>
          <View style={styles.mosquetimingwrapper}>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>الفجر</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>الظهر</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>العصر</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>المغرب</Text>
            </View>
            <View style={styles.mosquetimings}>
              <Text style={styles.timingtext}>العشاء</Text>
            </View>
          </View>
        </View>

        <View style={styles.six}>
          <View style={styles.rowstyle}>
            <View style={styles.colstyle}>
              <Text style={styles.NextAzantext}>المتبقي الإقامة</Text>
              <Text style={styles.NextAzantext}>Iqama After</Text>
              <Iqamaafter style={styles.Nextazaantime} />
            </View>
            <View style={styles.colstyle}>
              <View style={styles.colstyle}>
                <Text style={styles.NextAzantext}>الجمعة</Text>
                <Text style={styles.NextAzantext}>AL-Jumua</Text>
                <Jumuatime style={styles.Nextazaantime} />
              </View>
            </View>
            <View style={styles.colstyle}>
              <View style={styles.colstyle}>
                <Text style={styles.NextAzantext}>الصلاة التالي</Text>
                <Text style={styles.NextAzantext}>Next Azan</Text>
                <Nextazaan style={styles.Nextazaantime} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.seven}>
          <Text style={styles.headermosquename}>Mosque Name</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Verticalsix;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
  },
  heightgap: {
    flex: 1,
  },
  one: {
    flex: 2,
  },

  two: {
    flex: 2,
  },

  three: {
    flex: 3,
  },

  four: {
    flex: 2,
  },

  five: {
    flex: 9,
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  six: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  seven: {
    flex: 1,
  },

  colstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  colstyle001: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  colstyle002: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  colstyle003: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  rowend: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  flexstart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowstyleright: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  rowstyleleft: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    paddingTop: '2%',
  },
  DayofWeek: {
    color: 'white',
    fontSize: 49,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeeksmall: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Englishdatetext: {
    color: 'black',
    fontSize: 28,
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
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
  },
  NextAzantext: {
    color: 'white',
    fontSize: 27,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Nextazaantime: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  headermosquename: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 23,
  },
  mosquetimingwrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  mosquetimings: {
    flex: 1,
  },
  timingtext: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
  },
  timingtext1: {
    fontSize: 34,
    color: 'orange',
    fontFamily: 'JetBrainsMono-ExtraBold',
  },
});
