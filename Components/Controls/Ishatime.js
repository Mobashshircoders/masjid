import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Ishatime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Ishatime: '08:30'};
    //this.Ishatime = '08:30';
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Ishanamaaz');
    if (value != null) {
      this.setState({Ishatime: value});
    }
  }

  getData = () => {
    console.log('Ishatimeedata');
    try {
      DefaultPreference.get('Ishanamaaz').then(function (value) {
        console.log(value);
        // this.setState({Ishatime: value});
        this.Ishatime = value;
      });
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Ishatime}</Text>;
  }
}

export default Ishatime;
