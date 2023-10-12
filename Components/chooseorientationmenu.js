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

const ChooseOrientationMenu = ({navigation}) => {
  function onHorizontalClick() {
    saveOrientation('Horizontal');
    navigation.navigate('HorizontalMenu');

    try {
      DefaultPreference.set('orientation', 'Horizontal').then(function () {
        navigation.navigate('HorizontalMenu');
      });
      //await AsyncStorage.setItem('orientation', data);
    } catch (e) {}
  }

  function onVerticalClick() {
    try {
      DefaultPreference.set('orientation', 'Vertical').then(function () {
        navigation.navigate('VerticalMenu');
      });
      //await AsyncStorage.setItem('orientation', data);
    } catch (e) {}
  }

  const saveOrientation = data => {};

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onHorizontalClick}>
        <Text style={styles.buttonsstyle}>Horizontal</Text>
      </TouchableHighlight>
      <View style={styles.verticleLine}></View>
      <TouchableHighlight onPress={onVerticalClick}>
        <Text style={styles.buttonsstyle}>Vertical</Text>
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
export default ChooseOrientationMenu;
