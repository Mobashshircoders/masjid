import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Asrtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Asrtime: '05:00'};
    //this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Asrnamaaz');
    if (value != null) {
      this.setState({Asrtime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Asrnamaaz').then(function (value) {
        this.setState({Asrtime: value}).bind(this);
      });
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Asrtime}</Text>;
  }
}

export default Asrtime;
