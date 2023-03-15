import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

class Iqamatext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {language: 'English'};
    // this.getData = this.getData.bind(this);
  }

  async componentDidMount() {
    const value = await DefaultPreference.get('language');
    if (value != null) {
      this.setState({language: value});
    }
  }

  getData = () => {
    try {
      DefaultPreference.get('language')
        .then(function (value) {
          this.setState({language: value});
        })
        .bind(this);
    } catch (e) {
      // error reading value
    }
  };

  renderElement() {
    if (this.state.language == 'English')
      return <Text style={this.props.style}>Iqama</Text>;
    else if (this.state.language == 'Arabic') {
      return <Text style={this.props.style}>الإقامة</Text>;
    }
    return null;
  }

  render() {
    return this.renderElement();
  }
}

export default Iqamatext;
