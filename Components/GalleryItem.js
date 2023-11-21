import React, {useState, useCallback, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  findNodeHandle,
} from 'react-native';
import DefaultPreference from 'react-native-default-preference';

const GalleryItem = ({
  title,
  image,
  hasTVPreferredFocus,
  blockFocusRight,
  navigation,
}) => {
  const [focus, setFocus] = useState(false);

  const saveDesign = data => {
    try {
      DefaultPreference.set('design', data).then(function () {});

      navigation.navigate('H' + data);
      //await AsyncStorage.setItem('design', data);
    } catch (e) {}
  };

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const touchableHighlightRef = useRef(null);
  const onRef = useCallback(ref => {
    if (ref) {
      touchableHighlightRef.current = ref;
    }
  }, []);

  function handleItemTouch() {
    saveDesign(title);
  }

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      onPress={handleItemTouch}
      hasTVPreferredFocus={hasTVPreferredFocus}
      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
      ref={onRef}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
      }>
      <View>
        <Image style={styles.image} source={image} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  wrapperFocused: {
    borderColor: '#714add',
  },
  image: {
    width: 250,
    height: 140,
    borderRadius: 4,
  },
});

export default GalleryItem;
