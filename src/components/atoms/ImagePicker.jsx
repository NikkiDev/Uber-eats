import { View, Text } from "react-native";
import React from "react";
import * as ImgPicker from "expo-image-picker";
import styled from "styled-components";

const Container = styled.Pressable``;

export default function ImagePicker({ title, callback }) {
  const onPressHandler = async () => {
    const res = await ImgPicker.getMediaLibraryPermissionsAsync();
    if (res.granted) {
      const launchRes = await ImgPicker.launchImageLibraryAsync();
      callback(launchRes.uri);
    } else {
      const requestRes = await ImgPicker.requestMediaLibraryPermissionsAsync();
      if (requestRes) {
        const response = await ImgPicker.launchImageLibraryAsync();
        callback(response.uri);
      }
    }
  };

  return (
    <Container onPress={onPressHandler}>
      <Text>{title}</Text>
    </Container>
  );
}
