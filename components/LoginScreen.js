import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AuthContext } from '../App.js';

export const LoginScreen = (props) => {
  const { setUser } = useContext(AuthContext);
  const [districtText, setDistrictText] = useState("");
  const [IDText, setIDText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return(
    <View style={styles.layout}>
      <Text style={styles.texts}>
        Login
      </Text>
      <TextInput style={styles.textInput}
        label="District"
        value={districtText}
        onChangeText={text => setDistrictText(text)}
      />
      <TextInput style={styles.textInput}
        label="ID"
        value={IDText}
        onChangeText={text => setIDText(text)}
      />
      <TextInput style={styles.textInput}
        label="Password"
        value={passwordText}
        onChangeText={text => setPasswordText(text)}
      />
      <View style={styles.button}>
        <Button
          title="Go!"
          onPress={() => setUser(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
  },
  texts: {
    alignSelf: 'center',
    fontSize: 32,
    marginBottom: 16,
  },
  button: {
    alignSelf: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  }
});
