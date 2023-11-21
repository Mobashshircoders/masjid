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
  StatusBar,
  Platform,
  TouchableHighlight,
  SafeAreaView,
  ImageBackground,
  TouchableHighlightBase,
  Button,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.body}>
          {/* <Menu /> */}
          <View style={styles.topBox}>
            <Text style={styles.label}>Choose Orientation</Text>
          </View>

          <View style={styles.spaceview}></View>
          <View style={styles.topBox1}>
            <TouchableHighlight onPress={onHorizontalClick}>
              <Text style={styles.buttonsstyle}>Horizontal</Text>
            </TouchableHighlight>
            <View style={styles.spaceview1}></View>

            <TouchableHighlight onPress={onVerticalClick}>
              <Text style={styles.buttonsstyle}>Vertical</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  label: {
    fontSize: 40,
    color: '#31C283',
    fontWeight: 'bold',
    alignContent: 'center',
  },
  topBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBox1: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  spaceview: {
    height: 70,
    width: '100%',
  },
  spaceview1: {
    height: 20,
    width: '100%',
  },
  buttonsstyle: {
    fontSize: 30,
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
