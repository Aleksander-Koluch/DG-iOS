// components/ErrorView.tsx

import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  message: string;
};

export function ErrorView({ message }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffd7d7",
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },

  text: {
    color: "#b00020",
    fontWeight: "600",
  },
});
