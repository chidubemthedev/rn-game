import React from "react";
import { StyleSheet, Text } from "react-native";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 10,
  },
});
