import React, { useState } from "react";
import { Pressable, View } from "react-native";
import styled from "styled-components/native";

import Button from "../atoms/Button";

import Screen from "../atoms/Screen";
import AuthForm from "../molecules/AuthForm";

import * as ROUTES from "../../constants/routes";
import LoginScreenImage from "../../../assets/images/LoginScreenImage";
import Text from "../atoms/Text";
import Animated, { FadeIn } from "react-native-reanimated";
import Input from "../atoms/TextInput";

const Container = styled(Screen)`
  flex: 1;
  background-color: #000000;
`;

const InnterContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 65px;
  padding-right: 65px;
`;

const SignUpContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

const ForgotPasswordContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const QuestionText = styled.Text`
  color: #ffffff;
  margin-left: 5px;
`;

const SignUpButton = styled.Text`
  color: #06c167;
  margin-left: 5px;
`;

const Image = styled(LoginScreenImage)`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const UserName = styled(Input)`
  background-color: #ffffff;
  height: 40px;
  border-radius: 10px;
  /* width: 258px; */
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
`;

const Password = styled(Input)`
  background-color: #ffffff;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 16px;
  padding-left: 10px;
`;

const SignInBtn = styled(Button)`
  margin-bottom: 23px;
  margin-top: 5px;
`;

const SkipBtn = styled(Button)``;

const Desc = styled(Text)`
  color: #ffffff;
`;

const Label = styled(Text)`
  color: white;
  width: 100%;
  margin-bottom: 5px;
  text-align: left;
`;

const SignIn = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <InnterContainer>
        <Desc style={{ marginTop: 100, fontSize: 46, marginBottom: -10 }}>
          Uber
        </Desc>
        <Desc type="Medium" style={{ color: "#06C167", fontSize: 50 }}>
          Eats
        </Desc>
        <Animated.View entering={FadeIn}>
          <Image />
        </Animated.View>
        <Label>Username</Label>

        <UserName onChangeText={setUserName} value={userName} />
        <Label style={{ marginTop: 5 }}>Password</Label>

        {/* <Password onChange={(e) => setPassword(e)} value={password} /> */}
        <SignInBtn
          title="Sign In"
          onPress={() => navigation.navigate(ROUTES.DRAWER_NAVIGATOR)}
        />
        <ForgotPasswordContainer style={{ marginBottom: 20 }}>
          <Desc type="Light">Forgot password?</Desc>
          <Pressable
            onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD_SCREEN)}
          >
            <SignUpButton>Reset</SignUpButton>
          </Pressable>
        </ForgotPasswordContainer>
        {/* <AuthForm title="Salut" userName={userName} setUserName={setUserName} /> */}
        <SignUpContainer style={{ marginBottom: 20 }}>
          <Desc type="Light">Doesnt have account?</Desc>
          <Pressable>
            <SignUpButton>Sign Up</SignUpButton>
          </Pressable>
        </SignUpContainer>
      </InnterContainer>
    </Container>
  );
};

export default SignIn;
