import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import Animated, { FlipInEasyX } from "react-native-reanimated";

const Container = styled.Pressable`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ withMarginBottom }) => (withMarginBottom ? "margin-bottom: 20px" : "")}
`;

const ImageContainer = styled.View`
  height: 75px;
  width: 75px;
  background-color: #e6e6e6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CtgrImage = styled.Image``;

const Ctgr = styled.Text`
  text-align: center;
`;

const CategoryCard = ({ onPress, imgUrl, title, withMarginBottom }) => {
  return (
    <Container onPress={onPress} withMarginBottom={withMarginBottom}>
      <Animated.View entering={FlipInEasyX.duration(500)}>
        <ImageContainer>
          <CtgrImage source={imgUrl} />
        </ImageContainer>
        <Ctgr>{title}</Ctgr>
      </Animated.View>
    </Container>
  );
};

export default CategoryCard;
