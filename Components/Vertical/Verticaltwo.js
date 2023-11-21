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
import Azaantimingverticalwithshuruq from '../ControlComponents/Azaantimingverticalwithshuruq';
import Namaaztimingvertical from '../ControlComponents/Namaaztimingvertical';
import Namaazprayername from '../ControlComponents/Namaazprayername';
import Currentmontheng from '../Controls/Currentmontheng';
import Clockdesigncommon from '../ControlComponents/Clockdesigncommon';
import Iqamatime from '../Iqamatime';
import Imageslider from '../Imageslider';

const Verticaltwo = ({navigation}) => {
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
      source={require('../../assets/images/Vertical/two/Vbgtwo.png')}>
      <View style={styles.maincontainer}>
        <View style={styles.one}>
          <Advertisementcommon beforelayernine={styles.beforelayernine} />
        </View>
        <View style={styles.two}>
          <Clockdesigncommon
            clockone={styles.clockone}
            clocktwo={styles.clocktwo}
          />
        </View>
        <View style={styles.three}>
          <View style={styles.rowstyle}>
            <Currentmontheng style={styles.DayofWeek1} />
            <Currentdayeng style={styles.DayofWeek} />
          </View>
        </View>
        <View style={styles.four}>
          <Engclockdate style={styles.Englishdatetext} />
        </View>
        <View style={styles.five}>
          <ImageBackground
            style={styles.layernineimg}
            source={require('../../assets/images/Vertical/one/Vhorizontalmiddle1.png')}>
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
          </ImageBackground>
        </View>
        <View style={styles.heightgap}></View>
        <View style={styles.six}>
          <View style={styles.rowstyle1}>
            <View>
              <Azaantimingverticalwithshuruq />
            </View>
            <View>
              <View style={styles.mosquetimingwrapper}>
                <ImageBackground
                  style={styles.layerimg}
                  source={require('../../assets/images/Vertical/two/Vnamaaznamebox1.png')}>
                  <View style={styles.mosquetimings1}>
                    <Fajrtext style={styles.timingtext1} />
                  </View>
                </ImageBackground>
                <View style={styles.viewheight}></View>
                <ImageBackground
                  style={styles.layerimg}
                  source={require('../../assets/images/Vertical/two/Vnamaaznamebox1.png')}>
                  <View style={styles.mosquetimings1}>
                    <Dhuhrtext style={styles.timingtext1} />
                  </View>
                </ImageBackground>
                <View style={styles.viewheight}></View>
                <ImageBackground
                  style={styles.layerimg}
                  source={require('../../assets/images/Vertical/two/Vnamaaznamebox1.png')}>
                  <View style={styles.mosquetimings1}>
                    <Asrtext style={styles.timingtext1} />
                  </View>
                </ImageBackground>
                <View style={styles.viewheight}></View>
                <ImageBackground
                  style={styles.layerimg}
                  source={require('../../assets/images/Vertical/two/Vnamaaznamebox1.png')}>
                  <View style={styles.mosquetimings1}>
                    <Maghribtext style={styles.timingtext1} />
                  </View>
                </ImageBackground>
                <View style={styles.viewheight}></View>
                <ImageBackground
                  style={styles.layerimg}
                  source={require('../../assets/images/Vertical/two/Vnamaaznamebox1.png')}>
                  <View style={styles.mosquetimings1}>
                    <Ishatext style={styles.timingtext1} />
                  </View>
                </ImageBackground>
                <View style={styles.viewheight}></View>
                <ImageBackground
                  style={styles.layerimg}
                  source={require('../../assets/images/Vertical/two/Verticalnamaazboxbig1.png')}>
                  <View style={styles.mosquetimings1}>
                    <Shuruqtext style={styles.timingtext1} />
                  </View>
                </ImageBackground>
              </View>
            </View>
            <View>
              <Namaaztimingvertical />
            </View>
          </View>
        </View>
        <View style={styles.seven}>
          <ImageBackground
            style={styles.layernineimg}
            source={require('../../assets/images/Vertical/one/VHorizontalmostbottom1.png')}>
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
          </ImageBackground>
        </View>
        <View style={styles.eight}>
          <Text style={styles.headermosquename}>Mosque Name</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Verticaltwo;
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
  },
  heightgap: {
    flex: 1,
  },
  one: {
    flex: 3,
  },

  two: {
    flex: 4,
  },

  three: {
    flex: 2,
  },

  four: {
    flex: 3,
  },

  five: {
    flex: 2,
  },

  six: {
    flex: 12,
  },

  seven: {
    flex: 3,
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
    fontSize: 39,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  DayofWeek1: {
    color: 'black',
    fontSize: 42,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Englishdatetext: {
    color: 'black',
    fontSize: 59,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  Arabicdatetext: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'AbdoullahAshgar',
    alignSelf: 'center',
  },
  layerimg: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    justifyContent: 'space-between',
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
  clockone: {
    color: 'black',
    fontSize: 90,
    fontWeight: 'bold',
  },
  clocktwo: {
    color: 'black',
    fontSize: 55,
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
    justifyContent: 'space-around',
  },
  mosquetimings: {
    flex: 1,
  },
  timingtext: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
    alignSelf: 'center',
  },
  mosquetimings1: {
    flex: 1,
  },
  timingtext1: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'JetBrainsMono-Bold',
    alignSelf: 'center',
  },
  viewheight: {
    height: '3%',
  },
});
