import React, { useState } from "react";
import styled from "styled-components";
import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import PromotionWidget from "../molecules/PromotionWidget";
import { ScrollView, View } from "react-native";
import RadioLabel from "../molecules/RadioLabel";

const sauces = [
  {
    id: 0,
    value: 1,
    label: "Mariana Sauce",
  },
  {
    id: 1,
    value: 1,
    label: "Garlicky Sauce",
  },
  {
    id: 2,
    value: 1,
    label: "Pesto Sauce",
  },
  {
    id: 3,
    value: 1,
    label: "BBQ Sauce",
  },
  {
    id: 4,
    value: 1,
    label: "Buffalo Sauce",
  },
];
const sizes = [
  {
    id: 0,
    isChecked: false,
    label: "Small",
  },
  {
    id: 1,
    isChecked: false,
    label: "Medium",
    price: 4,
  },
  {
    id: 2,
    isChecked: false,
    label: "Large",
    price: 10,
  },
  {
    id: 3,
    isChecked: false,
    label: "Extra Large",
    price: 15,
  },
  {
    id: 4,
    isChecked: false,
    label: "Super",
    price: 18,
  },
];
const crust = [
  {
    id: 0,
    isChecked: false,
    label: "Regular crust",
  },
  {
    id: 1,
    isChecked: false,
    label: "Corn skin crust",
    price: 4,
  },
  {
    id: 2,
    isChecked: false,
    label: "Thick pan crust",
    price: 10,
  },
];

const Container = styled(Screen)``;

const RestaurantTitle = styled(Text)``;

const ItemPrice = styled(Text)`
  margin: 8px 0;
`;

const ItemDesc = styled(Text)`
  color: #545454;
`;

const Promotion = styled(PromotionWidget)`
  margin-top: 36px;
`;

const SauceContainer = styled.View`
  margin-top: 24px;
`;

const SauceTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;
const SizeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`;

const SauceTitle = styled(Text)``;

export default function OrderDetails({ route }) {
  const { restaurantName, price, desc } = route.params;
  let num = parseInt(price);

  const [sizePrice, setSizePrice] = useState(num);
  const [crustPrice, setCrustPrice] = useState();

  console.log(">>>>> sizePrice", sizePrice);
  // console.log(">>>>> crustPrice", crustPrice);

  const handlePress = (id, amount, arr, callback) => {
    callback(num + (amount ? amount : 0));

    arr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
      <Container>
        <RestaurantTitle size={26}>{restaurantName}</RestaurantTitle>
        <ItemPrice size={22}>${price}</ItemPrice>
        <ItemDesc>{desc}</ItemDesc>

        <Promotion />

        <SauceContainer>
          <SauceTitleWrapper>
            <SauceTitle size={18}>Choose your sauce</SauceTitle>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            >
              <Text>Required</Text>
            </View>
          </SauceTitleWrapper>
          {sauces.map((item) => {
            return <RadioLabel key={item.id} label={item.label} />;
          })}
        </SauceContainer>
        <SauceContainer>
          <SizeWrapper>
            <SauceTitle size={18}>Choose your size</SauceTitle>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            >
              <Text>Required</Text>
            </View>
          </SizeWrapper>
          {sizes.map((item) => {
            return (
              <RadioLabel
                key={item.id}
                label={item.label}
                price={item.price}
                onPress={() =>
                  handlePress(item.id, item.price, sizes, setSizePrice)
                }
                checked={item.isChecked}
              />
            );
          })}
          <Text>{sizePrice}</Text>
        </SauceContainer>
        <SauceContainer>
          <SizeWrapper>
            <SauceTitle size={18}>Choose your size</SauceTitle>
            <View
              style={{
                backgroundColor: "#EEEEEE",
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 10,
              }}
            >
              <Text>Required</Text>
            </View>
          </SizeWrapper>
          {crust.map((item) => {
            return (
              <RadioLabel
                key={item.id}
                label={item.label}
                price={item.price}
                onPress={() =>
                  handlePress(item.id, item.price, crust, setSizePrice)
                }
                checked={item.isChecked}
              />
            );
          })}
          <Text>{sizePrice}</Text>
        </SauceContainer>
      </Container>
    </ScrollView>
  );
}
