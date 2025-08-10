import Button from "@/components/ui/Button";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {};

const StartScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <TextInput />
      <Button title="Reset" />
      <Button title="Confirm" />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#72063c",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
