import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Maghribazaantime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Maghribazaantime: '06:05'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Maghribazaan');
    if (value != null) {
      this.setState({Maghribazaantime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Maghribazaan')
        .then(function (value) {
          this.setState({Maghribazaantime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Maghribazaantime}</Text>;
  }
}

export default Maghribazaantime;
