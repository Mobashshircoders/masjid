import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Currentyeareng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentyear: this.getYeardata()};
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({currentyear: this.getYeardata()});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 60000000);
  }

  getYeardata = () => {
    var d = new Date();
    var mname = d.getFullYear().toString();

    return mname;
  };

  render() {
    return <Text style={this.props.style}>{this.state.currentyear}</Text>;
  }
}

export default Currentyeareng;
