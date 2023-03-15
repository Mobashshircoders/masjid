import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Currentmontheng extends React.Component {
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
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const shortmonthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    var d = new Date();
    var mname = '';
    if ('shortmonth' in this.props) {
      mname = shortmonthNames[d.getMonth()];
    } else {
      mname = monthNames[d.getMonth()];
    }

    return mname;
  };

  render() {
    return <Text style={this.props.style}>{this.state.currentmonth}</Text>;
  }
}

export default Currentmontheng;
