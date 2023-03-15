import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Dhuhrazaantime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Dhuhrazaantime: '01:30'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Dhuhrazaan');
    if (value != null) {
      this.setState({Dhuhrazaantime: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('Dhuhrazaan')
        .then(function (value) {
          this.setState({Dhuhrazaantime: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Dhuhrazaantime}</Text>;
  }
}

export default Dhuhrazaantime;
