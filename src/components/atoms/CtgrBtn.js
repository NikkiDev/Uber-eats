import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const Container = styled.Pressable`
  height: 40px;
  /* ${({ light }) => (light ? `background - color : #000000` : "")}; */
  background-color: ${({ light }) => (light ? `#EEEEEE` : "#000000")};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  border-radius: 25px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#000000" : "#FFFFFF")};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const Icon = styled.Image`
  ${({ iconLeft }) => (iconLeft ? "margin-right: 10px" : "margin-left: 10px")}
`;

const CtgrBtn = ({
  title,
  onPress,
  light = false,
  iconLeft,
  iconRight,
  ...otherProps
}) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      {iconLeft && <Icon source={iconLeft} iconLeft={iconLeft} />}
      <Title light={light}>{title}</Title>
      {iconRight && <Icon source={iconRight} />}
    </Container>
  );
};

export default CtgrBtn;
