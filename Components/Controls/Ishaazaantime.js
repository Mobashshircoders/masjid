import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Ishaazaantime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Ishaazaantime: '08:00'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Ishaazaan');
    if (value != null) {
      this.setState({Ishaazaantime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Ishaazaan')
        .then(function (value) {
          this.setState({Ishaazaantime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Ishaazaantime}</Text>;
  }
}

export default Ishaazaantime;
