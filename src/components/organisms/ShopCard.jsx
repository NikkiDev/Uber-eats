import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const CardImage = styled.Image`
  margin-right: 6px;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Icon = styled.Image``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

const SubTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
`;

const ShopCard = ({ onPress, imageUrl, title, subTitle, desc }) => {
  return (
    <Container onPress={onPress}>
      <InfoContainer>
        <CardImage source={imageUrl} />
        <View style={{ paddingHorizontal: 10 }}>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
          <SubTitle>{desc}</SubTitle>
        </View>
      </InfoContainer>
      <Icon source={require("../../../assets/icons/arrowRight.png")} />
    </Container>
  );
};

export default ShopCard;
