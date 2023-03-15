import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DefaultPreference from 'react-native-default-preference';
import moment from 'moment';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// const Nextazaan = ({style}) => {
//   const [clockstate, setClockstate] = useState();

//   useEffect(() => {
//     setInterval(() => {
//       setClockstate(getnextazaan());
//     }, 20000);
//   }, []);
//   return <Text style={style}>03:27</Text>;
// };

// export default Nextazaan;

class Nextazaan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Nextazaan: '05:30'};
    this.namaaztime = {
      Fajrazaantime: '05:05',
      Fajrtime: '05:30',
      Dhuhrtime: '01:30',
      Dhuhrazaantime: '01:00',
      Asrazaantime: '04:45',
      Asrtime: '05:15',
      Maghribazaantime: '06:05',
      Maghribtime: '06:10',
      Ishaazaantime: '08:00',
      Ishatime: '08:15',
    };
    // this.getData = this.getData.bind(this);
  }
  async componentDidMount() {
    await this.getData();
    this.setState({Nextazaan: this.getnextazaan()});
  }

  getData = async () => {
    try {
      const value1 = await DefaultPreference.get('Fajrazaan');
      if (value1 !== null) {
        this.setState({Fajrazaantime: value1});
      }
      const value2 = await DefaultPreference.get('Fajrnamaaz');
      if (value2 !== null) {
        this.setState({Fajrtime: value2});
      }
      const value3 = await DefaultPreference.get('Dhuhrazaan');
      if (value3 !== null) {
        this.setState({Dhuhrazaantime: value3});
      }
      const value4 = await DefaultPreference.get('Dhuhrnamaaz');
      if (value4 !== null) {
        this.setState({Dhuhrtime: value4});
      }
      const value5 = await DefaultPreference.get('Asrazaan');
      if (value5 !== null) {
        this.setState({Asrazaantime: value5});
      }
      const value6 = await DefaultPreference.get('Asrnamaaz');
      if (value6 !== null) {
        this.setState({Asrtime: value6});
      }
      const value7 = await DefaultPreference.get('Maghribazaan');
      if (value7 !== null) {
        this.setState({Maghribazaantime: value7});
      }
      const value8 = await DefaultPreference.get('Maghribnamaaz');
      if (value8 !== null) {
        this.setState({Maghribtime: value8});
      }
      const value9 = await DefaultPreference.get('Ishaazaan');
      if (value9 !== null) {
        this.setState({Ishaazaantime: value9});
      }
      const value10 = await DefaultPreference.get('Ishanamaaz');
      if (value10 !== null) {
        this.setState({Ishatime: value10});
      }
    } catch (e) {
      // error reading value
    }
  };

  getnextazaan = () => {
    var currdate = new Date();

    var year = currdate.getFullYear();
    var month = currdate.getMonth();
    var day = currdate.getDate();
    var hour = currdate.getHours();
    var minutes = currdate.getMinutes();

    var minvalue = 0;
    var nextazaantime = '';
    for (var k in this.namaaztime) {
      if (this.namaaztime.hasOwnProperty(k)) {
        if (!k.includes('azaan')) {
          continue;
        }
        //console.log("Key is " + k + ", value is" + namaaztime[k]);
        var temp = this.namaaztime[k];
        var mins = 0;
        var spl = temp.split(':');

        if (
          k == 'Fajrazaantime' ||
          (k == 'Dhuhrazaantime' &&
            parseInt(spl[0]) > 9 &&
            parseInt(spl[0]) < 13)
        ) {
          var date1 = new Date(
            year,
            month,
            day,
            parseInt(spl[0]),
            parseInt(spl[1]),
          );
          var seconds = (date1.getTime() - currdate.getTime()) / 1000;

          if ((seconds < minvalue || minvalue == 0) && seconds > 0) {
            minvalue = seconds;
            nextazaantime = temp;
          }
        } else {
          var hrs = parseInt(spl[0]) + 12;
          if (hrs > 23) {
            hrs = hrs - 24;
          }

          var date1 = new Date(year, month, day, hrs, parseInt(spl[1]));
          var seconds = (date1.getTime() - currdate.getTime()) / 1000;

          if ((seconds < minvalue || minvalue == 0) && seconds > 0) {
            minvalue = seconds;
            nextazaantime = temp;
          }
        }
      }
    }

    return nextazaantime;
  };

  converthhmmToInt = data => {
    var spl = data.split(':');
    var mins = parseInt(spl[0]) * 60 + parseInt(spl[1]);
    return mins;
  };

  namaaztime = {
    Fajrazaantime: '05:05',
    Fajrtime: '05:30',
    Dhuhrtime: '01:30',
    Dhuhrazaantime: '01:00',
    Asrazaantime: '04:45',
    Asrtime: '05:15',
    Maghribazaantime: '06:05',
    Maghribtime: '06:10',
    Ishaazaantime: '08:00',
    Ishatime: '08:15',
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({Nextazaan: this.getnextazaan()});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 60000);
  }

  render() {
    return <Text style={this.props.style}>{this.state.Nextazaan}</Text>;
  }
}

export default Nextazaan;
