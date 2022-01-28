import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import HeaderTab from "./components/HeaderTab";
import Home from "./screens/Home";

export default function App() {
  return(
    <SafeAreaView style={styles.container}>
      <HeaderTab/>
    </SafeAreaView>
  )
}
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     marginTop: StatusBar.currentHeight
   }
 })