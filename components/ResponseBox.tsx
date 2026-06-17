// components/ResponseBox.tsx

import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  response: string;
};

export function ResponseBox({ response }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Odpowiedź serwera</Text>

      <Text style={styles.response}>{response}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e4ffe5",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#2e7d32",
  },

  response: {
    color: "#1b5e20",
  },
});
