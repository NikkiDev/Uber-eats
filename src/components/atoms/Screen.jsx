import React from "react";
import { View, Text, Platform, Dimensions } from "react-native";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

const MainWrapper = styled.KeyboardAvoidingView``;

const ImageBackground = styled.ImageBackground`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
`;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 22px;
`;

const Screen = ({ children, style, ...otherProps }) => {
  return (
    <MainWrapper behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground>
        <Container style={style} {...otherProps}>
          {children}
        </Container>
      </ImageBackground>
    </MainWrapper>
  );
};

export default Screen;
