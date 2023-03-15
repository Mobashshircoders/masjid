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

const AUTOCOMPLETE_THRESHOLD = 600;

const SearchPage = ({navigation}) => {
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
  const saveLanguage = data => {
    try {
      DefaultPreference.set('language', data).then(function () {});
      //await AsyncStorage.setItem('language', data);
    } catch (e) {}
  };
  const saveCity = data => {
    try {
      DefaultPreference.set('city', data).then(function () {});
      //await AsyncStorage.setItem('city', data);
    } catch (e) {}
  };
  const saveOrientation = data => {
    try {
      DefaultPreference.set('orientation', data).then(function () {});
      //await AsyncStorage.setItem('orientation', data);
    } catch (e) {}
  };
  const saveDesign = data => {
    try {
      DefaultPreference.set('design', data).then(function () {});
      //await AsyncStorage.setItem('design', data);
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

  const fetchMosque = async () => {
    const resp = await fetch(Utils.URL + 'Masjid/Getmosquename');
    const data = await resp.json();
    setMosquenames(data);
    //setLoading(false);
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const fetchMosqueData = async mname => {
    const resp = await fetch(
      Utils.URL + 'Masjid/Getmosquedata?mosquename=' + mname,
    );
    const data = await resp.json();
    console.log('datatasd');
    //console.log(data);
    saveMasjidid(data['Masjidid']);
    saveMasjidname(data['Masjidname']);
    saveDesign(data['Designname']);

    saveOrientation(data['Orientation']);

    saveLanguage(data['Language']);
    saveCity(data['City']);
    saveFajrazaan(data['Fajrazaan']);
    saveFajrnamaaz(data['Fajrnamaaz']);
    saveShuruq(data['Shuruq']);
    saveDhuhrazaan(data['Dhuhrazaan']);
    saveDhuhrnamaaz(data['Dhuhrnamaaz']);
    saveAsrazaan(data['Asrazaan']);
    saveAsrnamaaz(data['Asrnamaaz']);
    saveMaghribazaan(data['Maghribazaan']);
    saveMaghribnamaaz(data['Maghribnamaaz']);
    saveIshaazaan(data['Ishaazaan']);
    saveMaghribnamaaz(data['Ishanamaaz']);
    saveJumuanamaaz(data['AlJumuanamaaz']);
    await sleep(20000);
    setDesign(data['Designname']);
    setOrient(data['Orientation']);
    //console.log(Orient);
    if (data['Orientation'] == 'Horizontal') {
      navigation.navigate('H' + data['Designname']);
    } else {
      navigation.navigate('V' + data['Designname']);
    }

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

  function resetSearch() {
    // Reset search
    setSearchResults([]);
    setSearchResultsEmpty(false);
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

  function onKeyPress(event) {
    //console.log('onKeyPress', event);
  }

  function onChange(event) {
    //console.log("onChange", event);
  }

  function onChangeText(text) {
    //console.log("onChangeText", text);
    if (autocompleteTimer) {
      clearTimeout(autocompleteTimer);
    }
    autocompleteTimer = setTimeout(() => {
      triggerAutocompleteSearch(text);
    }, AUTOCOMPLETE_THRESHOLD);
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

  async function getDesignData() {
    try {
      const value = await AsyncStorage.getItem('@design');
      if (value !== null) {
        setDesign(value);
      }
    } catch (e) {
      // error reading value
    }
  }

  async function getOrientData() {
    try {
      const value = await AsyncStorage.getItem('@orientation');
      if (value !== null) {
        setOrient(value);
      }
    } catch (e) {
      // error reading value
    }
  }

  async function onPressSubmit() {
    //console.log('Submit ata' + inputmosque);

    //await fetchMosqueData(inputmosque);
    //console.log('Submit ata' + inputmosque);
    await getOrientData();
    await getDesignData();
    if (Orient == 'Horizontal') {
      navigation.navigate('H' + design);
    } else {
      navigation.navigate('V' + design);
    }
  }

  // function(design, orient){
  //   if(orient == 'Horizontal'){
  //     if(design == 'Design1'){

  //     }else if(design == 'Design2'){

  //     }else if(design == 'Design3'){

  //     }else if(design == 'Design4'){

  //     }else if(design == 'Design5'){

  //     }else if(design == 'Design6'){

  //     }else if(design == 'Design7'){

  //     }else if(design == 'Design8'){

  //     }else if(design == 'Design9'){

  //     }else if(design == 'Design10'){

  //     }else if(design == 'Design11'){

  //     }else if(design == 'Design12'){

  //     }else if(design == 'Design13'){

  //     }else if(design == 'Design14'){

  //     }else if(design == 'Design15'){

  //     }else if(design == 'Design16'){

  //     }else if(design == 'Design17'){

  //     }else if(design == 'Design18'){

  //     }

  //   }else if(orient == 'Vertical'){
  //     if(design == 'Design1'){

  //     }else if(design == 'Design2'){

  //     }else if(design == 'Design3'){

  //     }else if(design == 'Design4'){

  //     }else if(design == 'Design5'){

  //     }else if(design == 'Design6'){

  //     }else if(design == 'Design7'){

  //     }else if(design == 'Design8'){

  //     }else if(design == 'Design9'){

  //     }else if(design == 'Design10'){

  //     }else if(design == 'Design11'){

  //     }else if(design == 'Design12'){

  //     }else if(design == 'Design13'){

  //     }else if(design == 'Design14'){

  //     }else if(design == 'Design15'){

  //     }else if(design == 'Design16'){

  //     }else if(design == 'Design17'){

  //     }else if(design == 'Design18'){

  //     }else if(design == 'Design19'){

  //     }else if(design == 'Design20'){

  //     }
  //   }
  // }

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

export default SearchPage;

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

const countries = [
  'Afghanistan',
  'Akrotiri',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Ashmore and Cartier Islands',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas, The',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Bassas da India',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burma',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Clipperton Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Coral Sea Islands',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Dhekelia',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Europa Island',
  'Falkland Islands',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern and Antarctic Lands',
  'Gabon',
  'Gambia,',
  'Gaza Strip',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Glorioso Islands',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard Island and McDonald Islands',
  'Holy See (Vatican City)',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Jamaica',
  'Jan Mayen',
  'Japan',
  'Jersey',
  'Jordan',
  'Juan de Nova Island',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Namibia',
  'Nauru',
  'Navassa Island',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paracel Islands',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn Islands',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Helena',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Pierre and Miquelon',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia and the South Sandwich Islands',
  'Spain',
  'Spratly Islands',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Svalbard',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tromelin Island',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Venezuela',
  'Vietnam',
  'Virgin Islands',
  'Wake Island',
  'Wallis and Futuna',
  'West Bank',
  'Western Sahara',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];
