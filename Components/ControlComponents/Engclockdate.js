import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Engclockdate = ({style}) => {
  const [clockstate, setClockstate] = useState();
  const [clockstateone, setClockstateone] = useState();
  const [color, setColor] = useState('');
  useEffect(() => {
    setInterval(() => {
      var dates = moment().format('DD/ MMM / YYYY');
      setClockstate(dates);
    }, 20000);
  }, []);
  return <Text style={style}>{clockstate}</Text>;
};

export default Engclockdate;
