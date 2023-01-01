import React, { useState, createContext, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import { AuthHelper } from './components/AuthHelper.js';

export const AuthContext = createContext({
  hasUser: false, 
  setUser: () => {},
});

export default function App() {
  const [hasUser, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{ hasUser, setUser }}>
      <PaperProvider>
        <NavigationContainer>
          <AuthHelper />
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}
