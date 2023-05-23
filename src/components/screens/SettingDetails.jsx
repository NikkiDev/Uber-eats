import { View } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import ImagePicker from "../atoms/ImagePicker";

const Container = styled(Screen)``;

const ProfileInfo = styled.View`
  display: flex;
  align-items: center;
`;

const UserImage = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
`;

const UserName = styled(Text)`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const imageUrl = require("../../../assets/images/defaultUser.png");

function SettingDetails({ navigation }) {
  const [imgUrl, setImgUrl] = useState(false);

  return (
    <Container>
      <ProfileInfo>
        <UserImage source={imgUrl ? { uri: imgUrl } : imageUrl} />
        <UserName>John Doe</UserName>
        <ImagePicker title="EDIT ACCOUNT" callback={setImgUrl} />
      </ProfileInfo>
    </Container>
  );
}

export default SettingDetails;
