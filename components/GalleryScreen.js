import { StyleSheet, Text, View } from 'react-native';

export const GalleryScreen = (props) => {
  return(
    <View style={styles.layout}>
      <Text style={styles.texts}>
        Gallery
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
