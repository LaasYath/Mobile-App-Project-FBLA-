import { StyleSheet, Text, View, Button } from 'react-native';

export const LoginScreen = (props) => {
  const navigation = props.navigation; 

  return(
    <View style={styles.layout}>
      <Text style={styles.texts}>
        Login
      </Text>
      <Button 
        title="Log In"
        onPress={() => {
          navigation.navigate('Main');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    fontSize: 32,
    marginBottom: 16,
  },
});
