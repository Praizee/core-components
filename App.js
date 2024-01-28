// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import Greet from "./components/Greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.container}>Stylesheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //occupy entire available space
    backgroundColor: "plum",
    padding: 60,
  },
  title: {},
});
