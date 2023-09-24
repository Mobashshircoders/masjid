import React, {useEffect} from 'react';
import DefaultPreference from 'react-native-default-preference';
//  DefaultPreference.set('DynamicFont','Helvetica')

const Global = () => {
  useEffect(() => {
    DynamicFont();
  });
  const DynamicFont = data => {
    try {
      DefaultPreference.set('DynamicFont', 'Helvetica').then(function () {});
      //await AsyncStorage.setItem('masjidname', data);
    } catch (e) {}
  };
  return <Text></Text>;
};
export default Global;
