import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};

const GameScreen = (props: Props) => {
  const params = useLocalSearchParams<{ userNumber: string }>();
  return (
    <View style={styles.container}>
      <Text>Opponent&apos;s Guess</Text>
      <Text>{params.userNumber}</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>

      <View>
        <Text>Log rounds</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
