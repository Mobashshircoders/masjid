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

const ArabicFont = ({navigation}) => {
  function onGEDinarClick() {
    saveFont('GEDinar');
  }

  function onAbdoullahAshgarClick() {
    saveFont('AbdoullahAshgar');
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
      <TouchableHighlight onPress={onAbdoullahAshgarClick}>
        <Text style={styles.buttonsstyle}>AbdoullahAshgar</Text>
      </TouchableHighlight>
      <View style={styles.verticleLine}></View>
      <TouchableHighlight onPress={onGEDinarClick}>
        <Text style={styles.buttonsstyle}>GEDinar</Text>
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
export default ArabicFont;
