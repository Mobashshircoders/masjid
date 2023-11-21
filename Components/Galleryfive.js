import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import shuffle from 'lodash.shuffle';
import GalleryItem from './GalleryItem';
import {DEFAULT_ITEMS_FIVE} from '../Components/ControlComponents/DefaultItem';

const GalleryFive = ({navigation, rowNumber}) => {
  const items = shuffle(DEFAULT_ITEMS_FIVE);

  return (
    <ScrollView horizontal style={styles.row}>
      {items.map((item, i) => (
        <GalleryItem
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

export default GalleryFive;
