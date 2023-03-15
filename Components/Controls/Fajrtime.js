import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Fajrtime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Fajrtime: '05:40'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('Fajrnamaaz');

    if (value != null) {
      this.setState({Fajrtime: value});
    }
  }
  getData = () => {
    try {
      // const value = await AsyncStorage.getItem('@Fajrnamaaz').then(() =>
      //   this.setState({Fajrtime: value}),
      // );

      DefaultPreference.get('Fajrnamaaz')
        .then(function (value) {
          this.setState({Fajrtime: value});
        })
        .bind(this);

      // if (value !== null) {

      //   // value previously stored
      // }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return <Text style={this.props.style}>{this.state.Fajrtime}</Text>;
  }
}

export default Fajrtime;
