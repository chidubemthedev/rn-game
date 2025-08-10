import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
};

const Button = ({ title }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({});
