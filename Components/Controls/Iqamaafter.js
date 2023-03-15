import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
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

class Iqamaafter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Iqamaafter: '05:30'};
    this.namaaztime = {
      Fajrazaantime: '04:20',
      Fajrtime: '04:50',
      Dhuhrazaantime: '01:00',
      Dhuhrtime: '01:30',
      Asrazaantime: '05:15',
      Asrtime: '05:30',
      Maghribazaantime: '06:05',
      Maghribtime: '06:10',
      Ishaazaantime: '08:00',
      Ishatime: '08:15',
    };
  }

  async componentDidMount() {
    await this.getData();
    this.setState({Iqamaafter: this.getiqamaafter()});
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

  getFilter = () => {};

  getiqamaafter = () => {
    var currdate = new Date();

    var year = currdate.getFullYear();
    var month = currdate.getMonth();
    var day = currdate.getDate();
    var hour = currdate.getHours();
    var minutes = currdate.getMinutes();
    var iqamaaftertime = '-1';

    var fajratime = this.createDatetime(
      this.namaaztime.Fajrazaantime,
      year,
      month,
      day,
      0,
    );
    var fajrntime = this.createDatetime(
      this.namaaztime.Fajrtime,
      year,
      month,
      day,
      0,
    );

    if (
      currdate.getTime() >= fajratime.getTime() &&
      currdate.getTime() < fajrntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        fajrntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var dhuhratime = this.createDatetime(
      this.namaaztime.Dhuhrazaantime,
      year,
      month,
      day,
    );
    var dhuhrntime = this.createDatetime(
      this.namaaztime.Dhuhrtime,
      year,
      month,
      day,
    );
    var spl1 = this.namaaztime.Dhuhrazaantime.split(':');
    if (parseInt(spl1) < 1) {
      dhuhratime = this.createDatetime(
        this.namaaztime.Dhuhrazaantime,
        year,
        month,
        day,
        12,
      );
    }
    spl1 = this.namaaztime.Dhuhrtime.split(':');
    if (parseInt(spl1) < 1) {
      dhuhrntime = this.createDatetime(
        this.namaaztime.Dhuhrtime,
        year,
        month,
        day,
        12,
      );
    }
    if (
      currdate.getTime() >= dhuhratime.getTime() &&
      currdate.getTime() < dhuhrntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        dhuhrntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var asratime = this.createDatetime(
      this.namaaztime.Asrazaantime,
      year,
      month,
      day,
      12,
    );
    var asrntime = this.createDatetime(
      this.namaaztime.Asrtime,
      year,
      month,
      day,
      12,
    );

    if (
      currdate.getTime() >= asratime.getTime() &&
      currdate.getTime() < asrntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        asrntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var maghribatime = this.createDatetime(
      this.namaaztime.Maghribazaantime,
      year,
      month,
      day,
      12,
    );
    var maghribntime = this.createDatetime(
      this.namaaztime.Maghribtime,
      year,
      month,
      day,
      12,
    );

    if (
      currdate.getTime() >= maghribatime.getTime() &&
      currdate.getTime() < maghribntime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        maghribntime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    var ishaatime = this.createDatetime(
      this.namaaztime.Ishaazaantime,
      year,
      month,
      day,
      12,
    );
    var ishantime = this.createDatetime(
      this.namaaztime.Ishatime,
      year,
      month,
      day,
      12,
    );

    if (
      currdate.getTime() >= ishaatime.getTime() &&
      currdate.getTime() < ishantime.getTime()
    ) {
      iqamaaftertime = this.milisecondtoHHmm(
        ishantime.getTime() - currdate.getTime(),
      );
      return iqamaaftertime;
    }

    return iqamaaftertime;
  };

  milisecondtoHHmm = ms => {
    // 1- Convert to seconds:
    let seconds = ms / 1000;
    // 2- Extract hours:
    const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour

    seconds = seconds % 3600; // seconds remaining after extracting hours
    // 3- Extract minutes:
    const minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
    // 4- Keep only seconds not extracted to minutes:
    seconds = seconds % 60;
    var hrs =
      hours.toString().length == 1 ? '0' + hours.toString() : hours.toString();
    var mins =
      minutes.toString().length == 1
        ? '0' + minutes.toString()
        : minutes.toString();

    return hrs + ':' + mins;
  };

  createDatetime = (data, year, month, day, value) => {
    var spl = data.split(':');
    var date1 = new Date(
      year,
      month,
      day,
      parseInt(spl[0]) + value,
      parseInt(spl[1]),
    );
    return date1;
  };

  converthhmmToInt = data => {
    var spl = data.split(':');
    var mins = parseInt(spl[0]) * 60 + parseInt(spl[1]);
    return mins;
  };

  namaaztime = {
    Fajrazaantime: '05:00',
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
      this.setState({Iqamaafter: this.getiqamaafter()});
      //this.setState({Nextazaan: new Date().getHours()});
    }, 60000);
  }

  render() {
    return <Text style={this.props.style}>{this.state.Iqamaafter}</Text>;
  }
}

export default Iqamaafter;
