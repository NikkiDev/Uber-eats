import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import Button from "../atoms/Button";
import CtgrBtn from "../atoms/CtgrBtn";
import ShopCard from "../organisms/ShopCard";
import * as ROUTES from "../../constants/routes";
import { Shop } from "../../UserProvider";
import AppSnackBar from "../molecules/SnackBar";
import { RolePropType } from "deprecated-react-native-prop-types/DeprecatedViewAccessibility";

const imageUrl = require("../../../assets/icons/orders.png");

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  color: #000000;
  margin-bottom: 12px;
`;

const Subtitle = styled.Text`
  text-align: center;
  padding: 0 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #545454;
  margin-bottom: 38px;
`;

const MainTitle = styled.Text`
  position: absolute;
  top: 84px;
  left: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
  color: #000000;
  text-align: left;
  width: 100%;
`;

const StartBtn = styled(CtgrBtn)``;

const OrderstBtn = styled(CtgrBtn)`
  position: absolute;
  right: 0;
  top: 43px;
`;

const ShopScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  let shopItems = Shop();

  const testUrl = require("../../../assets/images/shopCardTestImage.png");

  setTimeout(() => {
    setData(shopItems);
  }, 1500);

  return (
    <Container>
      <MainTitle>Carts</MainTitle>
      <OrderstBtn title="Orders" iconLeft={imageUrl} light />
      {data.length === 0 ? (
        <InnerContainer>
          <Image source={require("../../../assets/images/shopCart.png")} />
          <Title>Add items to start basket</Title>
          <Subtitle>items in cart {data.length}</Subtitle>
          <Subtitle>
            Once you add items from a restuarant or store, your basket will
            appear here.
          </Subtitle>
          <StartBtn
            title="Start Shopping"
            onPress={() => navigation.navigate(ROUTES.HOME_SCREEN)}
          />
        </InnerContainer>
      ) : (
        <InnerContainer>
          {data.map((item, index) => {
            return (
              <ShopCard
                key={index}
                title={item.title}
                subTitle={item.subTitle}
                desc={item.desc}
                imageUrl={testUrl}
                onPress={() => navigation.navigate(ROUTES.ORDER_DETAILS, item)}
              />
            );
          })}
        </InnerContainer>
      )}
    </Container>
  );
};

export default ShopScreen;
