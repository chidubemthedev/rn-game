import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import StartScreen from "./start-game";

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
