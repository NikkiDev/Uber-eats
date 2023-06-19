import React, { useEffect, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import Checkbox from "expo-checkbox";
import BottomSheet from "../atoms/BottomSheet";

import Screen from "../atoms/Screen";
import Text from "../atoms/Text";
import PromotionWidget from "../molecules/PromotionWidget";
import RadioLabel from "../molecules/RadioLabel";
import Button from "../atoms/Button";
import { Portal } from "react-native-portalize";
import * as ROUTES from "../../constants/routes";
import { UpdateShop } from "../../UserProvider";
import AppSnackBar from "../molecules/SnackBar";

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

const addOns = [
  {
    id: 0,
    text: "1 side ranch dressing",
    price: 0.5,
    isChecked: false,
  },
  {
    id: 1,
    text: "2 side ranch dressing",
    price: 0.5,
    isChecked: false,
  },
  {
    id: 2,
    text: "side of marinara sauce",
    price: 0.5,
    isChecked: false,
  },
];

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  flex-grow: 1;
  padding-bottom: 120px;
`;

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

const SubmitBtn = styled(Button)``;

export default function OrderDetails({ route, navigation }) {
  const { restaurantName, price, desc, title } = route.params;
  const updateShop = UpdateShop();
  
  const [visible, setVisible] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const bottomSheetRef = useRef();

  let num = parseInt(price);

  const [total, setTotal] = useState(num);

  const [sizePrice, setSizePrice] = useState(num);
  const [crustPrice, setCrustPrice] = useState();

  const itemToBasket = {
    title: title,
    price: total,
    desc: desc,
  };

  const handleRadioButton = (id, amount, arr, callback) => {
    if (amount) callback(num + amount);

    arr.forEach((item) => {
      if (item.id !== id) {
        item.isChecked = false;
      } else {
        item.isChecked = true;
      }
    });
  };

  const handleCheckBox = (item) => {
    let num;
    item.isChecked = !item.isChecked;
    num = item.price;
    if (item.isChecked) {
      setTotal((prev) => prev + num);
    } else {
      setTotal((prev) => prev - num);
    }
  };

  const handleSubmit = () => {
    // bottomSheetRef.current?.open();
    updateShop(itemToBasket);
    setVisible(true);
    navigation.navigate(ROUTES.HOME_SCREEN);
  };
  useEffect(() => {
    console.log(bottomSheetRef);
  }, []);

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingHorizontal: 22 }}>
        <InnerContainer>
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
                    handleRadioButton(item.id, item.price, sizes, setSizePrice)
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
                    handleRadioButton(item.id, item.price, crust, setSizePrice)
                  }
                  checked={item.isChecked}
                />
              );
            })}
            <Text>{sizePrice}</Text>
          </SauceContainer>
          <SauceContainer>
            {addOns.map((item) => {
              return (
                <Checkbox
                  key={item.id}
                  style={{ margin: 5 }}
                  value={item.isChecked}
                  onValueChange={() => handleCheckBox(item)}
                  color={item.isChecked ? "#4630EB" : undefined}
                />
              );
            })}
          </SauceContainer>
          <SubmitBtn title="Add to Basket" light onPress={handleSubmit} />
        </InnerContainer>
      </ScrollView>
      <Portal>
        <BottomSheet bottomSheetRef={bottomSheetRef} modalHeight={700}>
          <SubmitBtn
            title="go to delivery"
            light
            onPress={() => {
              navigation.navigate(ROUTES.DELIVERY_DETAILS),
                bottomSheetRef.current?.close();
            }}
          />
        </BottomSheet>
      </Portal>
      <AppSnackBar
        text="You have successfully added item to basket"
        visible={visible}
        callback={setVisible}
      />
    </Container>
  );
}
