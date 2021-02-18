import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import MainScreen from '../screens/main';

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
    </MainStack.Navigator>
  );
}

export default AppNavigation;
