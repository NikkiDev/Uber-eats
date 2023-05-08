import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import OffersIcon from "../../../assets/icons/OffersIcon";
import RewardsIcon from "../../../assets/icons/RewardsIcon";
import MainCard from "../organisms/MainCard";
import Screen from "../atoms/Screen";

const Container = styled(Screen)`
  background-color: #ffffff;
`;

const HeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
`;

const Separator = styled.View`
  height: 1px;
  border: 2px solid black;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

const Cont = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const LabelContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Label = styled.Text`
  margin-left: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 44px;
  color: #000000;
  height: 100%;
`;

const Deals = ({ navigation, route }) => {
  const { num } = route.params;

  const [type, setTypes] = useState(num === 1 ? 0 : 1);

  const HeaderComponent = ({ onPress, borderBot }) => {
    return (
      <HeaderWrapper>
        <Cont>
          <LabelContainer
            onPress={() => setTypes(0)}
            style={{ border: type === 0 ? "1px solid black" : "" }}
          >
            <OffersIcon />
            <Label>Offers</Label>
          </LabelContainer>
          {type === 0 && <Separator />}
        </Cont>

        <Cont>
          <LabelContainer
            onPress={() => setTypes(1)}
            style={{ border: type === 0 ? "1px solid black" : "" }}
          >
            <RewardsIcon />
            <Label>Rewards</Label>
          </LabelContainer>
          {type === 1 && <Separator />}
        </Cont>
      </HeaderWrapper>
    );
  };

  const handlePress = () => {};

  const deliveryList = [
    {
      id: 0,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "Round eatery",
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promQuantity: null,
      promPrice: null,
    },
    {
      id: 1,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "DELIVERY",
      price: "0.35",
      deliveryTime: "15-45",
      rating: 4.2,
      promotion: true,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 2,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "DELIVERY",
      price: "2.29",
      deliveryTime: "25-50",
      rating: 4.1,
      promotion: true,
      promQuantity: 26,
      promPrice: 13,
    },
    {
      id: 3,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "Ice Cream Bar",
      price: "0.35",
      deliveryTime: "15-45",
      rating: 4.2,
      promotion: true,
      promQuantity: 5,
      promPrice: 8,
    },
    {
      id: 4,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "African Flavour",
      price: "2.29",
      deliveryTime: "25-50",
      rating: 4.1,
      promotion: true,
      promQuantity: 26,
      promPrice: 13,
    },
  ];

  const pickupList = [
    {
      id: 0,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "PICK UP",
      price: "0.29",
      deliveryTime: "10-25",
      rating: 4.4,
      promQuantity: null,
      promPrice: null,
      distance: 5.4,
    },
    {
      id: 1,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "Ice PICK UP",
      price: "0.35",
      deliveryTime: "15-45",
      rating: 4.2,
      promotion: true,
      promQuantity: 5,
      promPrice: 8,
      distance: 5.2,
    },
    {
      id: 2,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "PICK UP",
      price: "2.29",
      deliveryTime: "25-50",
      rating: 4.1,
      promotion: true,
      promQuantity: 26,
      promPrice: 13,
      distance: 4.6,
    },
    {
      id: 3,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "Ice Cream Bar PICK UP",
      price: "0.35",
      deliveryTime: "15-45",
      rating: 4.2,
      promotion: true,
      promQuantity: 5,
      promPrice: 8,
      distance: 2.2,
    },
    {
      id: 4,
      imgUrl: require("../../../assets/images/mainCardImg.png"),
      title: "African Flavour",
      price: "2.29",
      deliveryTime: "25-50",
      rating: 4.1,
      promotion: true,
      promQuantity: 26,
      promPrice: 13,
      distance: 5.2,
    },
  ];
  return (
    <Container>
      <FlatList
        ListHeaderComponent={HeaderComponent}
        ListHeaderComponentStyle={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          backgroundColor: "#FFFFFF",
          marginBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
        data={type === 0 ? deliveryList : pickupList}
        renderItem={({ item }) => (
          <MainCard
            key={item.id}
            imgUrl={item.imgUrl}
            title={item.title}
            price={type === 0 ? item.price : ""}
            distance={type === 1 ? item.distance : ""}
            deliveryTime={item.deliveryTime}
            rating={item.rating}
            promotion={type === 0 ? item.promotion : ""}
            promQuantity={item.promQuantity}
            promPrice={item.promPrice}
            // onPress={() =>
            //   navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
            // }
          />
        )}
      />
    </Container>
  );
};

export default Deals;
