/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ReactNative, {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';
//import Designonecheck from './Components/Horizontal/Designonecheck';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Designonechoose from './Components/Horizontal/Designonechoose';
import LeftBox from './Components/LeftBox';
import Infoone from './Components/Infoone';
import DigitalClock from './Components/DigitalClock';
import Dua from './Components/Dua';
import Salahtiming from './Components/Salahtiming';
import Designtwo from './Components/Horizontal/Designtwo';
import Designthree from './Components/Horizontal/Designthree';
import Designfour from './Components/Horizontal/Designfour';
import Designnineone from './Components/Horizontal/Designnineone';
import Designninetwo from './Components/Horizontal/Designninetwo';
import Designninefive from './Components/Horizontal/Designninefive';
import Designninefour from './Components/Horizontal/Designninefour';
import Designninethree from './Components/Horizontal/Designninethree';
import Designeightone from './Components/Horizontal/Designeightone';
import Designeighttwo from './Components/Horizontal/Designeighttwo';
import Designeightthree from './Components/Horizontal/Designeightthree';
import Designsevenone from './Components/Horizontal/Designsevenone';
import Designtenone from './Components/Horizontal/Designtenone';
import Designtentwo from './Components/Horizontal/Designtentwo';
import Designtenthree from './Components/Horizontal/Designtenthree';
import Gallery from './Components/Gallery';
import Menu from './Components/Menu';
import SearchPage from './Components/SearchPage';
import * as utils from './util';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Verticalone from './Components/Vertical/Verticalone';
import Verticalone2 from './Components/Vertical/Verticalone2';
import Verticaltwo from './Components/Vertical/Verticaltwo';
import Verticaltwotwo from './Components/Vertical/Verticaltwotwo';
import Verticalthree from './Components/Vertical/Verticalthree';
import Verticalthreetwo from './Components/Vertical/Verticalthreetwo';
import Verticalfour from './Components/Vertical/Verticalfour';
import Verticalfourtwo from './Components/Vertical/Verticalfourtwo';
import Verticalfive from './Components/Vertical/Verticalfive';
import Verticalsix from './Components/Vertical/Verticalsix';
import Verticalsixtwo from './Components/Vertical/Verticalsixtwo';
import Verticalseven from './Components/Vertical/Verticalseven';
import Verticalseventwo from './Components/Vertical/Verticalseventwo';
import Verticalnine from './Components/Vertical/Verticalnine';
import Verticalninetwo from './Components/Vertical/Verticalninetwo';
import Verticalten from './Components/Vertical/Verticalten';
import Verticaltentwo from './Components/Vertical/Verticaltentwo';
import Verticaleight from './Components/Vertical/Verticaleight';
import Verticaleighttwo from './Components/Vertical/Verticaleighttwo';
import Verticalfivetwo from './Components/Vertical/Verticalfivetwo';
import SearchPageVertical from './Components/SearchPageVertical';
import Imageslider from './Components/Imageslider';
import GalleryItem from './Components/GalleryItem';
import ChooseOrientationMenu from './Components/chooseorientationmenu';
import HorizontalMenu from './Components/horizontalmenu';
import VerticalMenu from './Components/verticalmenu';
import HorizontalLeanBackGrid from './Components/HorizontalLeanBackGrid';
import VerticalLeanBackGrid from './Components/VerticalLeanBackGrid';
import ChooseLanguage from './Components/chooselanguage';
import GetSearchPage from './Components/GetSearchPage';
import TestPage from './Components/testpage';
const Stack = createNativeStackNavigator();

const App = () => {
  //utils.URL
  const [inputmosque, setInputMosque] = useState('');
  const getMosque = async () => {
    try {
      const value = await AsyncStorage.getItem('@mosquename');
      if (value !== null) {
        setInputMosque(value);
      } else {
        setInputMosque('');
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={TestPage} />
        {/* <Stack.Screen name="Home" component={SearchPage} /> */}
        <Stack.Screen
          name="HorizontalMenu"
          component={HorizontalLeanBackGrid}
        />
        <Stack.Screen name="VerticalMenu" component={VerticalLeanBackGrid} />
        <Stack.Screen name="ChooseLanguage" component={ChooseLanguage} />
        <Stack.Screen name="Imageslider" component={Imageslider} />
        <Stack.Screen name="HDesign1" component={Designonechoose} />
        <Stack.Screen name="HDesign2" component={Designtwo} />
        <Stack.Screen name="HDesign3" component={Designthree} />
        <Stack.Screen name="HDesign4" component={Designfour} />
        <Stack.Screen name="HDesign5" component={Designeightone} />
        <Stack.Screen name="HDesign6" component={Designeightthree} />
        <Stack.Screen name="HDesign7" component={Designeighttwo} />
        <Stack.Screen name="HDesign8" component={Designninethree} />
        <Stack.Screen name="HDesign9" component={Designninetwo} />
        <Stack.Screen name="HDesign10" component={Designninefour} />
        <Stack.Screen name="HDesign11" component={Designninefive} />
        <Stack.Screen name="HDesign12" component={Designnineone} />
        <Stack.Screen name="HDesign13" component={Designonechoose} />
        <Stack.Screen name="HDesign14" component={Designsevenone} />
        <Stack.Screen name="HDesign15" component={Designtenone} />
        <Stack.Screen name="HDesign16" component={Designonechoose} />
        <Stack.Screen name="HDesign17" component={Designtentwo} />
        <Stack.Screen name="HDesign18" component={Designtenthree} />

        <Stack.Screen name="VDesign1" component={Verticalone} />
        <Stack.Screen name="VDesign2" component={Verticalone2} />
        <Stack.Screen name="VDesign3" component={Verticaltwo} />
        <Stack.Screen name="VDesign4" component={Verticaltwotwo} />
        <Stack.Screen name="VDesign5" component={Verticalthree} />
        <Stack.Screen name="VDesign6" component={Verticalthreetwo} />
        <Stack.Screen name="VDesign7" component={Verticalfour} />
        <Stack.Screen name="VDesign8" component={Verticalfourtwo} />
        <Stack.Screen name="VDesign9" component={Verticalfive} />
        <Stack.Screen name="VDesign10" component={Verticalfivetwo} />
        <Stack.Screen name="VDesign11" component={Verticalsix} />
        <Stack.Screen name="VDesign12" component={Verticalsixtwo} />
        <Stack.Screen name="VDesign13" component={Verticalseven} />
        <Stack.Screen name="VDesign14" component={Verticalseventwo} />
        <Stack.Screen name="VDesign15" component={Verticaleight} />
        <Stack.Screen name="VDesign16" component={Verticaleighttwo} />
        <Stack.Screen name="VDesign17" component={Verticalnine} />
        <Stack.Screen name="VDesign18" component={Verticalninetwo} />
        <Stack.Screen name="VDesign19" component={Verticalten} />
        <Stack.Screen name="VDesign20" component={Verticaltentwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // useEffect(() => {
  //   getMosque();
  // }, []);

  // if (inputmosque == '') {
  //   return <SearchPage />;
  // } else {
  //   return <Designtenone />;
  // }

  //return <Designtenone />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
