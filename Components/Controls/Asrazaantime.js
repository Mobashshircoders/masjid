import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Asrazaantime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Asrazaantime: '04:45'};
    //this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Asrazaan');
    if (value != null) {
      this.setState({Asrazaantime: value});
    }
  }
  getData = () => {
    try {
      DefaultPreference.get('Asrazaan').then(function (value) {
        this.setState({Asrazaantime: value}).bind(this);
      });
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Asrazaantime}</Text>;
  }
}

export default Asrazaantime;
