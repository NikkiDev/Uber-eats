import React from "react";
import styled from "styled-components";

const Container = styled.Pressable`
  border: 1px solid #e8e8e8;
  border-radius: 15px;
  margin-bottom: 16px;
`;

const CardImage = styled.Image``;

const Title = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  margin: 10px 0 10px 0;
`;

const BrowseCard = ({ imgUrl, title, onPress }) => {
  return (
    <Container onPress={onPress}>
      <CardImage source={imgUrl} />
      <Title>{title}</Title>
    </Container>
  );
};

export default BrowseCard;
