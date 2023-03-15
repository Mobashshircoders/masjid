import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Dhuhrtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Dhuhrtime: '01:30'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Dhuhrnamaaz');
    if (value != null) {
      this.setState({Dhuhrtime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Dhuhrnamaaz')
        .then(function (value) {
          this.setState({Dhuhrtime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Dhuhrtime}</Text>;
  }
}

export default Dhuhrtime;
