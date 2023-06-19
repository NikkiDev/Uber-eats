import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { Octicons, FontAwesome, Fontome5 } from "@expo/vector-icons";

const Input = ({
  placeholder,
  onChangeText,
  value,
  icon,
  secured,
  ...other
}) => {
  const [shown, setShown] = useState(false);

  return (
    <View style={styles.container} {...other}>
      {icon && (
        <View style={styles.iconContainer}>
          <Octicons name="search" size={24} color="black" />
        </View>
      )}

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#000000"
        style={styles.input}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        secureTextEntry={shown}
        {...other}
      />
      {secured && (
        <Pressable style={styles.eyeContainer} onPress={() => setShown(!shown)}>
          {shown ? (
            <FontAwesome name="eye" size={24} color="black" />
          ) : (
            <FontAwesome name="eye-slash" size={24} color="black" />
          )}
        </Pressable>
      )}
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
    // height: "100%",
    marginLeft: 8,
  },
  eyeContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginLeft: 5,
    position: "absolute",
    right: 10,
  },
});
