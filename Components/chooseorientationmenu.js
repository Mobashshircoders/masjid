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

const ChooseOrientationMenu = ({navigation}) => {
  function onHorizontalClick() {
    navigation.navigate('HorizontalMenu');
  }

  function onVerticalClick() {
    navigation.navigate('VerticalMenu');
  }

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
