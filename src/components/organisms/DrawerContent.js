import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import Text from "../atoms/Text";

const Container = styled(DrawerContentScrollView)``;

const ProfileContainer = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.SCREEN_BACKGROUND_COLOR_LIGHT};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  height: 155px;
  margin-bottom: 24px;
  padding: 0 20px 0 16px;
  width: 100%;
`;

const Avatar = styled.Image`
  border-radius: 35px;
  height: 65px;
  width: 65px;
`;

const UserInfoContainer = styled.View`
  margin-left: 16px;
`;

const Name = styled(Text)`
  font-size: 16px;
`;

const Email = styled(Text)`
  font-size: 12px;
`;

const ListWrapper = styled.View`
  flex: 1;
`;

const List = styled(DrawerItemList)``;

const BottomContainer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 46px;
  padding-right: 20px;
`;

const DrawerContent = ({ userImageUrl, ...props }) => {
  return (
    <Container {...props} contentContainerStyle={{ flex: 1 }}>
      <ProfileContainer>
        <Avatar
          source={{
            uri: "https://7wdata.be/wp-content/uploads/2016/05/icon-user-default.png",
          }}
        />

        <UserInfoContainer>
          <Name>Nikoloz Chachanidze</Name>
          <Email>Nika@gmail.com</Email>
        </UserInfoContainer>
      </ProfileContainer>
      <ListWrapper>
        <List {...props} />
      </ListWrapper>

      <BottomContainer>
        <DrawerItem
          label="Log out"
          style={{ width: 200 }}
          onPress={console.log("hi")}
        />
      </BottomContainer>
    </Container>
  );
};

export default DrawerContent;
