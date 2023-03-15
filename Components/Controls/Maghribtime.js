import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Maghribtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Maghribtime: '06:10'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Maghribnamaaz');
    if (value != null) {
      this.setState({Maghribtime: value});
    }
  }
  getData = () => {
    try {
      DefaultPreference.get('Maghribnamaaz')
        .then(function (value) {
          this.setState({Maghribtime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Maghribtime}</Text>;
  }
}

export default Maghribtime;
