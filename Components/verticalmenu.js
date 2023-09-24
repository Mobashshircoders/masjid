import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  BackHandler,
} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import shuffle from 'lodash.shuffle';
import GalleryItem from './GalleryItem';
import {DEFAULT_ITEMS} from '../Components/ControlComponents/DefaultItem';

const VerticalMenu = ({rowNumber}) => {
  const items = shuffle(DEFAULT_ITEMS);

  return (
    <ScrollView horizontal style={styles.row}>
      {items.map((item, i) => (
        <GalleryItem
          key={i}
          title={item.name}
          image={item.image}
          hasTVPreferredFocus={rowNumber === 0 && i === 0}
          blockFocusRight={i === items.length - 1}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginBottom: 50,
  },
});
export default VerticalMenu;
