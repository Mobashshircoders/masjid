import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Fajrazaantime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Fajrazaantime: '05:00'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Fajrazaan');
    if (value != null) {
      this.setState({Fajrazaantime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Fajrazaan')
        .then(function (value) {
          this.setState({Fajrazaantime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Fajrazaantime}</Text>;
  }
}

export default Fajrazaantime;
