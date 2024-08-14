import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { Horse, Heart, Cube } from 'phosphor-react-native';
import Horse from 'phosphor-react-native/src/icons/Horse';

export default function App() {
  return (
    <View style={styles.container}>
      <Horse />
      {/* <Heart color="#AE2983" weight="fill" size={32} /> */}
      {/* <Cube color="teal" weight="duotone" /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
