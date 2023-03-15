import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import Iqamatime from './Iqamatime';

//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Imageslidertwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designname: 'Home',
      textdata: '',
      data: ['Hadith1', 'Hadith2', 'Hadith3'],
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

    setInterval(() => {}, 2000);
  }

  render() {
    return (
      <View
        style={styles.container}
        //onLayout={this.onLayout}
      >
        <Text style={styles.headerText}>{this.state.textdata}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  headerText: {
    color: 'black',
    fontSize: 60,
  },
});

export default Imageslidertwo;
