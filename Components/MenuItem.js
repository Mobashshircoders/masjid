import React, {useState, useCallback} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';

const MenuItem = ({setMenuFocus}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
    setMenuFocus(true);
  }, [setMenuFocus]);

  const onBlur = useCallback(() => {
    setFocus(false);
    setMenuFocus(false);
  }, [setMenuFocus]);

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.item, focus ? styles.itemFocused : null]}>
      <Text style={styles.txt}>Horizontal</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#808080',
    alignSelf: 'stretch',
    height: 30,
    left: 0,
    marginBottom: 25,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  itemFocused: {
    backgroundColor: '#714add',
  },
  txt: {
    color: 'black',
  },
});

export default MenuItem;
