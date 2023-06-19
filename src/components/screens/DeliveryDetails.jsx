import { View, Text, StyleSheet } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import DeliveryDetailsCard from "../atoms/DeliveryDetailsCard";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Container = styled(Screen)``;

const DeliveryDetails = () => {
  return (
    <Container>
      {/* <DeliveryDetailsCard
        title="San Francisco Bay Area"
        subtitle="CA"
        icon={<Ionicons name="location-sharp" size={24} color="black" />}
      />
      <DeliveryDetailsCard
        title="Meet at the door"
        subtitle="Add delivery note"
        icon={<FontAwesome5 name="user-alt" size={20} color="black" />}
      /> */}
      <View style={styles.container}>
        {/* <MapView region={} style={styles.map} /> */}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default DeliveryDetails;
