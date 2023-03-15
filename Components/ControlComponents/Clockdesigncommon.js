import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Clockdesigncommon = props => {
  const [clockstate, setClockstate] = useState();
  const [clockstateone, setClockstateone] = useState();
  const [color, setColor] = useState('');

  useEffect(() => {
    setInterval(() => {
      const d = new Date().toLocaleTimeString();

      setClockstate(d.substring(0, 5));
      setClockstateone(d.substring(6, 8));
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={props.clockone}>{clockstate}</Text>
      <Text style={props.clocktwo}>{clockstateone}</Text>
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
  //   clockone: {
  //     color: 'black',
  //     fontSize: 50,
  //     fontWeight: 'bold',
  //   },
  //   clocktwo: {
  //     color: 'black',
  //     fontSize: 30,
  //     fontWeight: 'bold',
  //   },
});

export default Clockdesigncommon;
