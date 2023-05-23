import React, { useState } from "react";

import { RadioButton } from "react-native-paper";

import styled from "styled-components";
import Text from "../atoms/Text";

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled(Text)``;

const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PriceWrapper = styled.View``;

const Price = styled(Text)``;

const RadioLabel = ({ label, price, onPress, checked }) => {
  return (
    <Container>
      <LeftContainer>
        <RadioButton
          value={checked}
          status={checked === true ? "checked" : "unchecked"}
          onPress={onPress}
          uncheckedColor="blue"
        />
        <Label>{label}</Label>
      </LeftContainer>
      {price && (
        <PriceWrapper>
          <Price>US${price}</Price>
        </PriceWrapper>
      )}
    </Container>
  );
};

export default RadioLabel;
