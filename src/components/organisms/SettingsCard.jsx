import { View, Text, Image } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 55px;
`;

const Title = styled.Text`
  margin-left: 25px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const SettingsCard = ({ onPress, icon, title }) => {
  return (
    <Container onPress={onPress}>
      <Icon source={icon} />
      <Title>{title}</Title>
    </Container>
  );
};

export default SettingsCard;
