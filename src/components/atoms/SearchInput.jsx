import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";

const SearchInput = ({ value, onChangeText, onPress, ...otherProps }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Octicons name="search" size={18} color="black" />
      </View>
      <TextInput
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        onPress={onPress}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: "100%",
    backgroundColor: "#8d99ae35",
    borderRadius: 99,
    display: "flex",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 20,
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: 5,
    width: 20,
  },
  input: {
    width: "100%",
    marginLeft: 8,
    backgroundColor: "red",
    height: "100%",
  },
});
export default SearchInput;
