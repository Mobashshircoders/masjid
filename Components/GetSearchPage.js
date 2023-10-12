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
import Style from '../styles/Style';
import DefaultPreference from 'react-native-default-preference';

import clearImageSource from '../assets/clear.png';
import FocusableHighlight from './focusable/FocusableHighlight';
import * as Utils from '../util';
import * as Savedata from '../Data';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Global from './Horizontal/Global';

const AUTOCOMPLETE_THRESHOLD = 600;

const GetSearchPage = ({navigation}) => {
  const inputTextRef = useRef(null);
  const resultsRef = useRef(null);
  const [inputmosque, setInputmosque] = useState('');
  const [design, setDesign] = useState('');
  const [Orient, setOrient] = useState('');
  const [title, setTitle] = useState('data');
  const [mosquenames, setMosquenames] = useState([]);
  const [textInputFocused, setTextInputFocused] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultsEmpty, setSearchResultsEmpty] = useState(false);
  const [focus, setFocus] = useState(false);

  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const [method, setMethod] = useState(4);

  const saveMasjidname = data => {
    try {
      DefaultPreference.set('masjidname', data).then(function () {});
      //await AsyncStorage.setItem('masjidname', data);
    } catch (e) {}
  };
  const saveMasjidid = data => {
    try {
      DefaultPreference.set('masjidid', data.toString()).then(function () {});
      //await AsyncStorage.setItem('masjidid', data);
    } catch (e) {}
  };
  const saveCity = data => {
    try {
      DefaultPreference.set('city', data).then(function () {});
      //await AsyncStorage.setItem('city', data);
    } catch (e) {}
  };

  const fetchMosque = async () => {
    const resp = await fetch(Utils.URL + 'Masjid/Getmosquename');
    const data = await resp.json();
    setMosquenames(data['Masjidname']);
    // setCity(data['City']);
    // setCountry(data['Country']);
    // saveMasjidname(data['Masjidname']);
    // saveCity(data['City']);
    // saveMasjidid(data['Masjidid']);
    //setLoading(false);
  };
  let autocompleteTimer = null;
  useEffect(() => {
    fetchMosque();
    if (inputTextRef.current) {
      inputTextRef.current.focus();
    }
    // Clean up
    return () => {
      clearTimeout(autocompleteTimer);
    };
  }, [autocompleteTimer]);

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function resetSearch() {
    // Reset search
    setSearchResults([]);
    setSearchResultsEmpty(false);
  }

  function onKeyPress(event) {
    //console.log('onKeyPress', event);
  }

  function onChange(event) {
    //console.log("onChange", event);
  }

  function triggerAutocompleteSearch(text) {
    //console.log('triggerAutocompleteSearch(' + text + ')');
    if (text === '') {
      resetSearch();
      return;
    }
    // Filter list of countries
    //mosquenames
    const newSearchResults = mosquenames.filter(country => {
      return country.toLowerCase().indexOf(text.toLowerCase()) === 0;
    });
    // Update results
    setSearchResults(newSearchResults);
    setSearchResultsEmpty(newSearchResults.length === 0);
  }

  function onSubmitEditing(event) {
    //console.log("onEndEditing", event);
  }

  const onFocus = useCallback(
    data => {
      console.log(data + 'namessss');
      setInputmosque(data);
      //setFocus(true);
    },
    [title],
  );

  function onChangeText(text) {
    //console.log("onChangeText", text);
    if (autocompleteTimer) {
      clearTimeout(autocompleteTimer);
    }
    autocompleteTimer = setTimeout(() => {
      triggerAutocompleteSearch(text);
    }, AUTOCOMPLETE_THRESHOLD);
  }

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  async function onPresstim(txt) {
    //console.log(txt);
    //setInputmosque(txt);
    await fetchMosqueData(txt);
    // await getOrientData();
    // await getDesignData();
  }

  async function onPressExit() {
    await AsyncStorage.clear();
    await BackHandler.exitApp();
    //console.log('Submit ata' + inputmosque);
  }

  function showResults() {
    if (searchResults && searchResults.length > 0) {
      return searchResults.map((result, key) => {
        return (
          <TouchableHighlight
            //onPress={onPresstim(result)}
            onPress={() => onPresstim(result)}
            //onFocus={() => onFocus(result)}
            //onBlur={onBlur}
            style={styles.searchResult}
            styleFocused={styles.searchResultFocused}
            stylePressed={styles.searchResultPressed}
            key={key}>
            <Text style={styles.searchResultText}>{result}</Text>
          </TouchableHighlight>
        );
      });
    } else if (searchResultsEmpty) {
      return <Text style={styles.noResults}>No results</Text>;
    }
  }

  return (
    <View style={styles.right1}>
      <ImageBackground style={styles.imgback} source={require('./bgnine.png')}>
        <View style={Style.styles.header}>
          <Text style={Style.styles.headerText}>{'Search Mosque'}</Text>
        </View>
        <View style={Style.styles.content}>
          <View
            style={[
              styles.textInputContainer,
              textInputFocused && styles.textInputContainerFocused,
            ]}>
            <TextInput
              ref={inputTextRef}
              onKeyPress={onKeyPress}
              onChange={onChange}
              onChangeText={onChangeText}
              onSubmitEditing={onSubmitEditing}
              onFocus={() => {
                setTextInputFocused(true);
              }}
              onBlur={() => {
                setTextInputFocused(false);
              }}
              placeholder={'Search...'}
              placeholderTextColor={'gray'}
              clearButtonMode={'always'}
              autoCorrect={false}
              autoFocus={false}
              style={styles.textInput}
            />
            {Platform.OS === 'android' && (
              <FocusableHighlight
                nativeID={'input_dummy_button'}
                onPress={() => {}}
                onFocus={() => {
                  if (inputTextRef.current) {
                    inputTextRef.current.focus();
                  }
                }}
                hasTVPrefferedFocus={true}
                style={styles.dummyFocusable}>
                <Text />
              </FocusableHighlight>
            )}
            <FocusableHighlight
              nativeID={'input_clear_button'}
              onPress={() => {
                if (inputTextRef.current) {
                  inputTextRef.current.clear();
                }
                resetSearch();
              }}
              underlayColor={'transparent'}
              style={styles.textInputClearButton}
              styleFocused={styles.textInputClearButtonFocused}>
              <Image
                source={clearImageSource}
                style={styles.textInputClearImage}
                nativeID={'_image_'}
              />
            </FocusableHighlight>
          </View>

          <ScrollView
            ref={resultsRef}
            style={styles.searchResultsContainer}
            nativeID={'results'}
            showsVerticalScrollIndicator={false}>
            {showResults()}
          </ScrollView>

          <View>
            {/* <TouchableHighlight onPress={onPressSubmit}>
            <Text style={{fontSize: 30, color: 'white'}}>Submit</Text>
          </TouchableHighlight> */}
            <TouchableHighlight onPress={onPressExit}>
              <Text style={{fontSize: 30, color: 'white'}}>
                Exit Application
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgback: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  right1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    position: 'absolute',
    top: 0,
    width: Style.px(680),
    height: Style.px(80),
    backgroundColor: 'white',
    borderColor: 'transparent',
    borderRadius: Style.px(5),
    borderWidth: Style.px(5),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainerFocused: {
    borderColor: '#61dafb',
  },
  textInput: {
    width: Style.px(600),
    height: Style.px(70),
    padding: Style.px(10),
    fontSize: Style.px(50),
  },
  textInputClearButton: {
    width: Style.px(50),
    height: Style.px(50),
    marginLeft: Style.px(10),
    marginRight: Style.px(10),
    borderRadius: Style.px(5),
    borderWidth: Style.px(5),
    borderColor: 'transparent',
  },
  textInputClearButtonFocused: {
    borderColor: '#61dafb',
  },
  textInputClearImage: {
    width: Style.px(40),
    height: Style.px(40),
  },
  searchResultsContainer: {
    position: 'absolute',
    top: Style.px(100),
    width: Style.px(700),
    height: Style.px(600),
  },
  searchResult: {
    width: Style.px(680),
    marginHorizontal: Style.px(10),
    marginVertical: Style.px(5),
    borderRadius: Style.px(5),
    borderWidth: Style.px(5),
    borderColor: 'transparent',
  },
  searchResultFocused: {
    borderColor: '#61dafb',
  },
  searchResultPressed: {
    backgroundColor: '#ccc',
  },
  searchResultText: {
    fontSize: Style.px(65),
    color: 'white',
  },
  noResults: {
    width: Style.px(680),
    marginHorizontal: Style.px(10),
    fontSize: Style.px(30),
    color: 'white',
  },
  dummyFocusable: {
    width: 0,
    height: 0,
  },
});
export default GetSearchPage;
