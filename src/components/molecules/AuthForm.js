import React from "react";
import styled from "styled-components/native";
import Button from "../atoms/Button";

const Container = styled.View``;

const UserName = styled.TextInput`
  background-color: #edf2f4;
  height: 50px;
  width: 258px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Password = styled.TextInput`
  background-color: #edf2f4;
  height: 50px;
  width: 258px;
  border-radius: 10px;
  margin-bottom: 5px;
  font-size: 18px;
`;

const ActionBtn = styled(Button)``;

const AuthForm = ({ title, userName, password, setUserName, setPassword }) => {
  return (
    <Container>
      <UserName
        placeholder="Username"
        onChange={(e) => setUserName(e.nativeEvent.text)}
        value={userName}
      />
      <Password
        placeholder="Password"
        onChange={(e) => setPassword(e)}
        value={password}
      />
      <ActionBtn title={title} />
    </Container>
  );
};

export default AuthForm;
