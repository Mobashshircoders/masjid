import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Currentmonthurdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentmonth: this.getMonthName()};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentmonth: this.getMonthName()});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 600000);
  }

  getMonthName = () => {
    const monthNames = [
      'جنوری',
      'فروری',
      'مارچ',
      'اپریل',
      'مئی',
      'جون',
      'جولائی',
      'اگست',
      'ستمبر',
      'اکتوبر',
      'نومبر',
      'دسمبر',
    ];

    var d = new Date();
    var mname = '';

    mname = monthNames[d.getMonth()];

    return mname;
  };

  render() {
    return <Text style={this.props.style}>{this.state.currentmonth}</Text>;
  }
}

export default Currentmonthurdu;
