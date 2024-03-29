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

  const saveCountry = data => {
    try {
      DefaultPreference.set('country', data).then(function () {});
      //await AsyncStorage.setItem('city', data);
    } catch (e) {}
  };

  const saveFajrazaan = data => {
    try {
      DefaultPreference.set('Fajrazaan', data).then(function () {});
      //await AsyncStorage.setItem('Fajrazaan', data);
    } catch (e) {}
  };
  const saveFajrnamaaz = data => {
    try {
      DefaultPreference.set('Fajrnamaaz', data).then(function () {});
      //await AsyncStorage.setItem('Fajrnamaaz', data);
    } catch (e) {}
  };
  const saveMaghribazaan = data => {
    try {
      DefaultPreference.set('Maghribazaan', data).then(function () {});
      //await AsyncStorage.setItem('Maghribazaan', data);
    } catch (e) {}
  };
  const saveMaghribnamaaz = data => {
    try {
      DefaultPreference.set('Maghribnamaaz', data).then(function () {});
      //await AsyncStorage.setItem('Maghribnamaaz', data);
    } catch (e) {}
  };
  const saveDhuhrazaan = data => {
    try {
      DefaultPreference.set('Dhuhrazaan', data).then(function () {});
      //await AsyncStorage.setItem('Dhuhrazaan', data);
    } catch (e) {}
  };
  const saveDhuhrnamaaz = data => {
    try {
      DefaultPreference.set('Dhuhrnamaaz', data).then(function () {});
      //await AsyncStorage.setItem('Dhuhrnamaaz', data);
    } catch (e) {}
  };
  const saveAsrazaan = data => {
    try {
      DefaultPreference.set('Asrazaan', data).then(function () {});
      //await AsyncStorage.setItem('Asrazaan', data);
    } catch (e) {}
  };
  const saveAsrnamaaz = data => {
    try {
      DefaultPreference.set('Asrnamaaz', data).then(function () {});
      //await AsyncStorage.setItem('Asrnamaaz', data);
    } catch (e) {}
  };
  const saveIshaazaan = data => {
    try {
      DefaultPreference.set('Ishaazaan', data).then(function () {});
      //await AsyncStorage.setItem('Ishaazaan', data);
    } catch (e) {}
  };
  const saveIshanamaaz = data => {
    try {
      DefaultPreference.set('Ishanamaaz', data).then(function () {});
      //await AsyncStorage.setItem('Ishanamaaz', data);
    } catch (e) {}
  };
  const saveJumuanamaaz = data => {
    try {
      DefaultPreference.set('Jumuanamaaz', data).then(function () {});
      //await AsyncStorage.setItem('Jumuanamaaz', data);
    } catch (e) {}
  };
  const saveShuruq = data => {
    try {
      DefaultPreference.set('Shuruq', data).then(function () {});
      //await AsyncStorage.setItem('Shuruq', data);
    } catch (e) {}
  };

  const fetchData = async () => {
    let method = 4;
    let monthIndexorg = new Date().getMonth();
    let monthIndex = monthIndexorg + 1;
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    const respdata = await fetch(
      `http://api.aladhan.com/v1/hijriCalendarByCity?city=${encodeURIComponent(
        city,
      )}&country=${encodeURIComponent(country)}&method=${encodeURIComponent(
        method,
      )}&month=${encodeURIComponent(monthIndex)}&year=${encodeURIComponent(
        year,
      )}`,
      {
        method: 'GET',
      },
    );
    const returndata = await respdata.json();

    console.log(returndata);
    console.log(returndata.data[0].date.hijri.date);
    var strdate =
      ('0' + date).slice(-2).toString() +
      '-' +
      ('0' + monthIndex).slice(-2).toString() +
      '-' +
      year.toString();
    console.log(strdate);
    var createddate = new Date(strdate);
    console.log(createddate);

    console.log(returndata.data.length);

    for (let i = 0; i < returndata.data.length; i++) {
      if (strdate == returndata.data[i].date.hijri.date.toString()) {
        let obj = returndata.data[i];

        console.log(obj.timings);
        console.log('--------------');
        console.log(strdate);

        let fajrnamaaztime = getData(
          obj.timings.Fajr,
          parseInt('30'),
          year,
          monthIndex,
          date,
        );
        let dhuhrnamaaztime = getData(
          obj.timings.Dhuhr,
          parseInt('30'),
          year,
          monthIndex,
          date,
        );
        let jumanamaaztime = getData(
          obj.timings.Dhuhr,
          parseInt('45'),
          year,
          monthIndex,
          date,
        );
        let asrnamaaztime = getData(
          obj.timings.Asr,
          parseInt('15'),
          year,
          monthIndex,
          date,
        );
        let maghribnamaaztime = getData(
          obj.timings.Maghrib,
          parseInt('05'),
          year,
          monthIndex,
          date,
        );
        let ishanamaaztime = getData(
          obj.timings.Isha,
          parseInt('30'),
          year,
          monthIndex,
          date,
        );

        saveFajrazaan(obj.timings.Fajr.slice(0, 5));
        saveFajrnamaaz(fajrnamaaztime);
        saveDhuhrazaan(obj.timings.Dhuhr.slice(0, 5));
        saveDhuhrnamaaz(dhuhrnamaaztime);
        saveAsrazaan(obj.timings.Asr.slice(0, 5));
        saveAsrnamaaz(asrnamaaztime);
        saveMaghribazaan(obj.timings.Maghrib.slice(0, 5));
        saveMaghribnamaaz(maghribnamaaztime);
        saveIshaazaan(obj.timings.Isha.slice(0, 5));
        saveIshanamaaz(ishanamaaztime);
        saveJumuanamaaz(jumanamaaztime);
        saveShuruq(obj.timings.Sunrise.slice(0, 5));
        await sleep(10000);

        break;
      }
    }
    navigation.navigate('ChooseLanguage');
  };

  const fetchMosque = async () => {
    const resp = await fetch(Utils.URL + 'Masjid/Getmosquename');
    const data = await resp.json();
    setMosquenames(data);
    setCity(data['City']);
    setCountry(data['Country']);
    saveMasjidname(data['Masjidname']);
    saveCity(data['City']);
    saveMasjidid(data['Masjidid']);
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
    //await fetchMosqueData(txt);
    // await getOrientData();
    // await getDesignData();

    const arr = txt.split('-');
    saveMasjidname(arr[0]);
    setInputmosque(arr[0]);
    saveCity(arr[1]);
    setCity(arr[1]);
    saveCountry(arr[2]);
    setCountry(arr[2]);
    sleep(2000);

    fetchData();
  }

  function addMinutes(date, minutes) {
    date.setMinutes(date.getMinutes() + minutes);

    return date;
  }

  function getData(namaztime, interval, year, month, date) {
    let namaztimestart = namaztime.slice(0, 5);
    let calvalue = namaztimestart;
    let lastvalue = parseInt(namaztimestart.charAt(namaztimestart.length - 1));
    let between5to9 = true;
    if (lastvalue > 5 && lastvalue <= 9) {
      lastvalue = 0;
      calvalue = namaztimestart.slice(0, -1) + lastvalue.toString();
      between5to9 = true;
    } else if (lastvalue > 0 && lastvalue <= 4) {
      lastvalue = 5;
      calvalue = namaztimestart.slice(0, -1) + lastvalue.toString();
      between5to9 = false;
    } else {
      calvalue = namaztimestart;
      between5to9 = false;
    }
    var tempsplit = calvalue.split(':');
    var fajrdate = new Date(
      year,
      month,
      date,
      parseInt(tempsplit[0]),
      parseInt(tempsplit[1]),
    );
    var newdateadded = new Date();
    if (between5to9) {
      newdateadded = addMinutes(fajrdate, interval + 10);
    } else {
      newdateadded = addMinutes(fajrdate, interval);
    }
    return newdateadded.toTimeString().slice(0, 5);
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
      <ImageBackground style={styles.imgback} source={require('./pxfuel.jpg')}>
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
    fontSize: Style.px(35),
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
