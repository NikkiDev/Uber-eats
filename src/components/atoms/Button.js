import React from "react";
import styled from "styled-components/native";

const Container = styled.Pressable`
  width: 258px;
  height: 45px;
  background-color: ${({ light }) => (light ? "#C7DAC5" : "#54924f")};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 23px;
`;

const Title = styled.Text`
  color: ${({ light }) => (light ? "#55837D" : "#FFFFFF")};
  font-size: 16px;
`;

const Button = ({ title, onPress, light = false, ...otherProps }) => {
  return (
    <Container onPress={onPress} light={light} {...otherProps}>
      <Title light={light}>{title}</Title>
    </Container>
  );
};

export default Button;
