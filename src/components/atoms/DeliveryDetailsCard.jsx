import { Pressable, StyleSheet, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Text from "./Text";

const DeliveryDetailsCard = ({ icon, title, subtitle }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.wrapper}>
        {icon}
        <View style={{ marginLeft: 10 }}>
          <Text type="Bold">{title}</Text>
          <Text size={14}>{subtitle}</Text>
        </View>
      </View>
      <Entypo name="chevron-right" size={24} color="black" />
    </Pressable>
  );
};

export default DeliveryDetailsCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
