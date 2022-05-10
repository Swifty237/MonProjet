import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox}></View>
      <View style={styles.redBox}></View>
      <View style={styles.blueBox}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  redBox: {
    flex: 1,
    backgroundColor: "red"
  },

  greenBox: {
    flex: 2,
    backgroundColor: "green"
  },

  blueBox: {
    flex: 3,
    backgroundColor: "blue"
  } 
});
