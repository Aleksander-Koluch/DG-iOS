import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  multiline?: boolean;
};

export function CustomInput({
  value,
  onChangeText,
  placeholder,
  multiline,
}: Props) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      multiline={multiline}
      style={[styles.input, multiline && styles.multilineInput]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    border: '1px solid black',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
    fontSize: 16,
  },

  multilineInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
});
