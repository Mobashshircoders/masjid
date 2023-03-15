import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {Arabicyear} from '../Controls/Arabicdates';

class Currentyeararabic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentyear: Arabicyear(1, 'year')};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentyear: Arabicyear(1, 'year')});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 600000);
  }

  render() {
    return <Text style={this.props.style}>{this.state.currentyear}</Text>;
  }
}

export default Currentyeararabic;
