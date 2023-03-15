import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Jumuatime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Jumuatime: '12:45'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Jumuanamaaz');
    if (value != null) {
      this.setState({Jumuatime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Jumuanamaaz')
        .then(function (value) {
          this.setState({Jumuatime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Jumuatime}</Text>;
  }
}

export default Jumuatime;
