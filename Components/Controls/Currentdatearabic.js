import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Arabicyear} from '../Controls/Arabicdates';

class Currentdatearabic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentdate: Arabicyear(1, 'date')};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentdate: Arabicyear(1, 'date')});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 600000);
  }

  render() {
    return <Text style={this.props.style}>{this.state.currentdate}</Text>;
  }
}

export default Currentdatearabic;
