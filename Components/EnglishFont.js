import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  BackHandler,
} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableHighlight,
  ImageBackground,
  TouchableHighlightBase,
  Button,
} from 'react-native';
import DefaultPreference from 'react-native-default-preference';

const EnglishFont = ({navigation}) => {
  function onFtyStrategyClick() {
    saveFont('FtyStrategycideNcv-elGI');
  }

  function onJetBrainsclick() {
    saveFont('JetBrainsMono-Bold');
  }

  const saveFont = data => {
    try {
      DefaultPreference.set('font', data).then(function () {
        navigation.navigate('ChooseOrientation');
      });
      //await AsyncStorage.setItem('language', data);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onJetBrainsclick}>
        <Text style={styles.buttonsstyle}>JetBrainsMono-Bold</Text>
      </TouchableHighlight>
      <View style={styles.verticleLine}></View>
      <TouchableHighlight onPress={onFtyStrategyClick}>
        <Text style={styles.buttonsstyle}>FtyStrategycideNcv-elGI</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  buttonsstyle: {
    fontSize: 40,
    color: '#31C283',
    fontWeight: 'bold',
  },
  verticleLine: {
    height: '100%',
    width: 2,
    backgroundColor: '#909090',
  },
});
export default EnglishFont;
