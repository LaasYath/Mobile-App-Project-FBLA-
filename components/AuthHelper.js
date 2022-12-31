import React, { useState, createContext, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../App.js';
import { LoginScreen } from './LoginScreen.js';
import { MainNavigatorScreen } from './MainNavigatorScreen.js';

const Stack = createStackNavigator();

export const AuthHelper = () => {
  return (
    <AuthContext.Consumer>
      {({ hasUser }) => {
        let shownScreen;
        if (!hasUser) {
          shownScreen = <LoginScreen />;
        } else {
          shownScreen = <MainNavigatorScreen />;
        }
        
        return (
          shownScreen
        );
      }}
    </AuthContext.Consumer>
  );
};