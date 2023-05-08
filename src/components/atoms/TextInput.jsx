import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

const Input = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Octicons name="search" size={24} color="black" />
      </View>

      <TextInput
        placeholder="Food, shopping, drinks, etc"
        placeholderTextColor="#000000"
        style={styles.input}
        // onChangeText={onChangeText}
        // value={text}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: "100%",
    backgroundColor: "#8d99ae35",
    borderRadius: 99,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: 5,
  },
  input: {
    width: "100%",
    height: "100%",
    marginLeft: 8,
  },
});
