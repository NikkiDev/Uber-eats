import { ScrollView, Text, View } from "react-native";
import React from "react";
import styled from "styled-components/native";

import Button from "../atoms/Button";

import * as ROUTES from "../../constants/routes";
import Screen from "../atoms/Screen";
import SettingsCard from "../organisms/SettingsCard";

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  padding: 0 22px;
  display: flex;
  justify-content: space-around;
`;

const UserCard = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 55px;
  margin-bottom: 11px;
  margin-top: 10px;
`;

const UserImage = styled.Image`
  margin-right: 15px;
`;

const UserName = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

const cards = [
  {
    title: "Orders",
    icon: require("../../../assets/icons/orders.png"),
  },
  {
    title: "Your Favorites",
    icon: require("../../../assets/icons/favorites.png"),
  },
  {
    title: "Restaurant Rewards",
    value: ROUTES.DEALS_SCREEN,
    icon: require("../../../assets/icons/rewards.png"),
  },
  {
    title: "Wallet",
    icon: require("../../../assets/icons/wallet.png"),
  },
  {
    title: "Send Gifts",
    icon: require("../../../assets/icons/gift.png"),
  },
  {
    title: "Help",
    icon: require("../../../assets/icons/help.png"),
  },
  {
    title: "Promotions",
    icon: require("../../../assets/icons/promotions.png"),
  },
  {
    title: "Settings",
    value: ROUTES.SETTINGS_DETAILS,
    icon: require("../../../assets/icons/settings.png"),
  },
];

function Settings({ navigation }) {
  const handlePress = (str) => {
    navigation.navigate(str, { num: 2 });
  };
  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <InnerContainer>
          <UserCard>
            <UserImage
              source={require("../../../assets/images/defaultUser.png")}
            />
            <UserName>John Doe</UserName>
          </UserCard>
          {cards.map((card, idx) => {
            return (
              <SettingsCard
                key={idx}
                title={card.title}
                icon={card.icon}
                onPress={() => handlePress(card.value)}
              />
            );
          })}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
}

export default Settings;
