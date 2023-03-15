import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Arabicyear} from '../Controls/Arabicdates';

class Currentmontharabic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentmonth: Arabicyear(1, 'month')};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentmonth: Arabicyear(1, 'month')});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 600000);
  }

  render() {
    return <Text style={this.props.style}>{this.state.currentmonth}</Text>;
  }
}

export default Currentmontharabic;
