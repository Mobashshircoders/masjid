import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Iqamatime from './Iqamatime';
import DefaultPreference from 'react-native-default-preference';

//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Imageslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designname: 'Home',
      images: [
        // 'https://source.unsplash.com/1024x768/?nature',
        // 'https://source.unsplash.com/1024x768/?water',

        // 'https://source.unsplash.com/1024x768/?tree', // Network image
        require('./imgs/3.jpg'), // Local image
        require('./imgs/4.jpg'), // Local image
        require('./imgs/5.jpg'), // Local image
        require('./imgs/6.jpg'), // Local image
        require('./imgs/7.jpg'), // Local image
      ],
    };
  }

  onLayout = e => {
    this.setState({
      width: e.nativeEvent.layout.width,
    });
  };

  async componentDidMount() {
    const value1 = await DefaultPreference.get('orientation');
    if (value1 !== null) {
      const val2 = await DefaultPreference.get('design');
      if (val2 != null) {
        var tmpdesign = value1 == 'Horizontal' ? 'H' + val2 : 'V' + val2;
        this.setState({designname: tmpdesign});
      }
    }
    setInterval(() => {
      var _data = new Iqamatime();
      //console.log('tempcheck');

      _data.getiqamaafter().then(tim => {
        if (tim != '-1') {
          navigation.navigate(this.state.designname);
        }
      });
      //console.log(tim);

      //this.setState({Nextazaan: new Date().getHours()});
    }, 600000);
  }

  render() {
    return (
      <View
        style={styles.container}
        //onLayout={this.onLayout}
      >
        <SliderBox
          images={this.state.images}
          autoplay
          circleLoop
          height={800}
          ImageComponentStyle={{height: '50%', width: '97%', marginTop: 5}}
          //   onCurrentImagePressed={index =>
          //     console.warn(`image ${index} pressed`)
          //   }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#806B33',
  },
  sliderbox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
  },
});

export default Imageslider;
