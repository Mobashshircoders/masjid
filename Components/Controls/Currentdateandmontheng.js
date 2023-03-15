import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Currentdateandmontheng extends React.Component {
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
    var d = new Date();
    var mname = '';
    var dated =
      d.getDate() < 10 ? '0' + d.getDate().toString() : d.getDate().toString();
    var monthd =
      d.getMonth() < 10
        ? '0' + d.getMonth().toString()
        : d.getMonth().toString();
    mname = dated + '/' + monthd;

    return mname;
  };

  render() {
    return <Text style={this.props.style}>{this.state.currentmonth}</Text>;
  }
}

export default Currentdateandmontheng;
