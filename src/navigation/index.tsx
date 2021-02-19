import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MainScreen from '../screens/main';
import PlaylistScreen from '../screens/playlist';
import SearchScreen from '../screens/search';
import TrackDetailScreen from '../screens/track-detail';

const MainStack = createStackNavigator();

function AppNavigation() {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          title: 'Music Latam',
          headerShown: true,
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: 'black'},
        }}
      />
      <MainStack.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          title: 'Playlist',
          headerShown: true,
          headerTintColor: 'white',
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: 'black'},
        }}
      />
      <MainStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          headerShown: true,
          headerTintColor: 'white',
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: 'black'},
        }}
      />
      <MainStack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{
          title: 'Track Detail',
          headerShown: true,
          headerTintColor: 'white',
          headerTitleStyle: {color: 'white'},
          headerStyle: {backgroundColor: 'black'},
        }}
      />
    </MainStack.Navigator>
  );
}

export default AppNavigation;
