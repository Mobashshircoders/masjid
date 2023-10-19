import React from 'react';
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
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const TestPage = () => {
  const fetchData = async () => {
    let method = 4;
    let monthIndexorg = new Date().getMonth();
    let monthIndex = monthIndexorg + 1;
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let city = 'Kolkata';
    let country = 'India';
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
    console.log(monthIndex);
    console.log(year);
    console.log(date);
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

        let fajrtimestart = obj.timings.Fajr.slice(0, 5);
        let calvalue = fajrtimestart;
        let lastvalue = parseInt(
          fajrtimestart.charAt(fajrtimestart.length - 1),
        );
        if ((lastvalue > 5) & (lastvalue <= 9)) {
          lastvalue = 0;
          calvalue = fajrtimestart.slice(0, -1) + lastvalue.toString();
        }
        var tempsplit = calvalue.split(':');
        var fajrdate = new Date(
          year,
          monthIndexorg,
          date,
          parseInt(tempsplit[0]),
          parseInt(tempsplit[1] + 30),
        );

        break;
      }
    }
  };

  function getData(namaztime, interval, year, month, date) {
    let namaztimestart = namaztime.slice(0, 5);
    let calvalue = namaztimestart;
    let lastvalue = parseInt(namaztimestart.charAt(namaztimestart.length - 1));
    if (lastvalue > 5 && lastvalue <= 9) {
      lastvalue = 0;
      calvalue = namaztimestart.slice(0, -1) + lastvalue.toString();
    } else if (lastvalue > 0 && lastvalue <= 4) {
      lastvalue = 5;
      calvalue = namaztimestart.slice(0, -1) + lastvalue.toString();
    }
    var tempsplit = calvalue.split(':');
    var fajrdate = new Date(
      year,
      month,
      date,
      parseInt(tempsplit[0]),
      parseInt(tempsplit[1] + interval),
    );
  }

  function getResult(filterBy, objList) {
    return objList.hightlights.filter(function (obj) {
      return obj.queries.some(function (item) {
        return item.indexOf(filterBy) >= 0;
      });
    });
  }

  async function onHorizontalClick() {
    await fetchData();
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 90,
          height: 90,

          borderRadius: 45,
          borderWidth: 1,
          borderColor: '#d0f0bd',
          borderStyle: 'solid',

          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>
          20:30
        </Text>

        <TouchableHighlight onPress={onHorizontalClick}>
          <Text>Horizontal</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#d0f0bd',
    fontSize: 30,
    fontFamily: 'JetBrainsMono-ExtraBold',
    fontWeight: 'bold',
  },
});

export default TestPage;
