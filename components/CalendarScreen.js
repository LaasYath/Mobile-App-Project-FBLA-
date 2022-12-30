import { StyleSheet, Text, View } from 'react-native';

export const CalendarScreen = (props) => {
  return(
    <View style={styles.layout}>
      <Text style={styles.texts}>
        Calendar
      </Text>
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
