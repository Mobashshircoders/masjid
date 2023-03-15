import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Clockdesigntwo = () => {
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
      <Text style={styles.clockone}>{clockstate}</Text>
      <Text style={styles.clocktwo}>{clockstateone}</Text>
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
  clockone: {
    color: '#d0f0bd',
    fontSize: 50,
    fontWeight: 'bold',
  },
  clocktwo: {
    color: '#d0f0bd',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Clockdesigntwo;
