import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Gallery from './Gallery';
import GalleryTwo from './Gallerytwo';
import GalleryThree from './Gallerythree';
import GalleryFour from './Galleryfour';
import GalleryFive from './Galleryfive';
import Menu from './Menu';

const HorizontalLeanBackGrid = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {/* <Menu /> */}
            <View style={styles.sectionContainer}>
              <Gallery navigation={navigation} rowNumber={0} />
              <GalleryTwo navigation={navigation} />
              <GalleryThree navigation={navigation} />
              <GalleryFour navigation={navigation} />
              <GalleryFive navigation={navigation} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.black,
  },
  sectionContainer: {
    marginTop: 32,
    marginLeft: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HorizontalLeanBackGrid;
