import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import shuffle from 'lodash.shuffle';
import GalleryItem from './GalleryItem';
import {DEFAULT_ITEMS_TWO} from '../Components/ControlComponents/DefaultItemVertical';
import GalleryItemVertical from './GalleryItemVertical';

const GalleryVerticalTwo = ({navigation, rowNumber}) => {
  const items = shuffle(DEFAULT_ITEMS_TWO);

  return (
    <ScrollView horizontal style={styles.row}>
      {items.map((item, i) => (
        <GalleryItemVertical
          key={i}
          title={item.name}
          image={item.image}
          hasTVPreferredFocus={rowNumber === 0 && i === 0}
          blockFocusRight={i === items.length - 1}
          navigation={navigation}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 50,
  },
});

export default GalleryVerticalTwo;
