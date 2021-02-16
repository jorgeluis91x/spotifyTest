import React from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useTypedSelector} from '../../hooks/use-typed-selector';
import {getProfile} from '../../redux/app';

function MainScreen() {
  const dispatch = useDispatch();
  const profile = useTypedSelector((state) => state.app.profile);
  dispatch(getProfile());
  return (
    <View>
      <Text>{profile?.display_name || 'tesss'}</Text>
    </View>
  );
}
export default MainScreen;
