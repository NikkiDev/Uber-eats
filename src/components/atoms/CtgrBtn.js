import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  height: 40px;
  ${({ light }) => (light ? `background - color : #000000` : "")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 20px;
  border-radius: 25px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#FFFFFF" : "#000000")};
  font-size: 16px;
`;

const CtgrBtn = ({ title, onPress, light = false, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default CtgrBtn;
