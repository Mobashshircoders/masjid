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

const ChooseLanguage = ({navigation}) => {
  function onEnglishClick() {
    saveLanguage('English');
  }

  function onArabicClick() {
    saveLanguage('Arabic');
  }

  const saveLanguage = data => {
    try {
      DefaultPreference.set('language', data).then(function () {
        navigation.navigate('ChooseTimezone');
      });
      //await AsyncStorage.setItem('language', data);
    } catch (e) {}
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onEnglishClick}>
        <Text style={styles.buttonsstyle}>English</Text>
      </TouchableHighlight>
      <View style={styles.verticleLine}></View>
      <TouchableHighlight onPress={onArabicClick}>
        <Text style={styles.buttonsstyle}>Arabic</Text>
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
export default ChooseLanguage;
