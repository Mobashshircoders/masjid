import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Currentdayurdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentday: this.getDayName()};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentday: this.getDayName()});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 600000);
  }

  getDayName = () => {
    var days = ['اتوار', 'پیر', 'منگل', 'بدھ', 'جمعرات', 'جمعہ', 'ہفتہ'];
    var shortdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var d = new Date();
    var dayName = '';

    dayName = days[d.getDay()];

    return dayName;
  };

  render() {
    return <Text style={this.props.style}>{this.state.currentday}</Text>;
  }
}

export default Currentdayurdu;
