import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Shawwaltime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Shawwaltime: '06:15'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Shuruq');
    if (value != null) {
      this.setState({Shawwaltime: value});
    }
  }
  getData = () => {
    try {
      DefaultPreference.get('Shuruq')
        .then(function (value) {
          this.setState({Shawwaltime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Shawwaltime}</Text>;
  }
}

export default Shawwaltime;
