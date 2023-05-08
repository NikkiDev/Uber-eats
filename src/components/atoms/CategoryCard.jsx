import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const CategoryCard = ({ onPress, imgUrl, title }) => {
  return (
    <Container onPress={onPress}>
      <ImageContainer>
        <CtgrImage source={imgUrl} />
      </ImageContainer>
      <Ctgr>{title}</Ctgr>
    </Container>
  );
};

export default CategoryCard;
