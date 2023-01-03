import { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AuthContext } from '../Contexts.js';

//Initialize Parse/Connect to Back4App db
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

//hash funcs
import { JSHash, JSHmac, CONSTANTS } from "react-native-hash";

//Initialize sdk
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('hd8SQBtMaTjacNWKfJ1rRWnZCAml1Rquec1S9xCV', 'Qn7JG5jASG6A45G5acmsKMCCgJwJx1Kd7Shc6VPq');
Parse.serverURL = 'https://parseapi.back4app.com/';

//get & print all students psswd hash when app is intially loaded (runs once only)
  // (async () => {
  //   const Student = Parse.Object.extend('Student');
  //   const query = new Parse.Query(Student);
  //   // You can also query by using a parameter of an object
  //   // query.equalTo('objectId', 'xKue915KBG');
  //   try {
  //     const results = await query.find();
  //     for (const object of results) {
  //       // Access the Parse Object attributes using the .GET method
  //       const passwordHash = object.get('passwordHash')
  //       console.log(passwordHash);
  //     }
  //   } catch (error) {
  //     console.error('Error while fetching Student', error);
  //   }
  // })();

// function AuthUser(props) {
//   const Student = Parse.Object.extend('Student');
//     const query = new Parse.Query(Student);
//     // You can also query by using a parameter of an object
//     // query.equalTo('objectId', 'xKue915KBG');
//     try {
//       const results = query.find();
//       for (const object of results) {
//         // Access the Parse Object attributes using the .GET method
//         const id = object.get('name');
//         if (id == props.userID) {
//           const passwordHash = object.get('passwordHash')
//           if (passwordHash == props.password) {
//             setUser(true);
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Error while fetching Student', error);
//     }
// }

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
          onPress={() => {
            setUser(true)
          }}
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
