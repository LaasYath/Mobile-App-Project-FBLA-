import { StyleSheet, Text, View, Button } from 'react-native';

export const HomeScreen = (props) => {
  const navigation = props.navigation;

  return(
    <View style={styles.layout}>
      <Text style={styles.texts}>
        Home
      </Text>
      <Button 
        title="Log Out"
        onPress={() => {
          navigation.getParent().navigate('Login');
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
