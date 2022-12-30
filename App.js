import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from './components/LoginScreen.js';
import { MainNavigatorScreen } from './components/MainNavigatorScreen.js';

/* will eventually have to use this
// global authentication state, with default values
export const AuthContext = createContext({
  hasUser: false, 
  setUser: () => {},
});
*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainNavigatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
