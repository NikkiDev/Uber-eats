import { ScrollView, Text, View } from "react-native";
import React from "react";
import styled from "styled-components";

import BrowseCard from "../atoms/BrowseCard";
import Screen from "../atoms/Screen";
import TextInput from "../atoms/TextInput";

import * as ROUTES from "../../constants/routes";

const Container = styled(Screen)``;

const Search = styled(TextInput)``;

const InnerContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 27px;
`;

const Title = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 15px;
`;

const browseList = [
  {
    id: 0,
    title: "Mexican",
    imgUrl: require("../../../assets/images/browse/CategoryImage-6.png"),
  },
  {
    id: 1,
    title: "Fast Food",
    imgUrl: require("../../../assets/images/browse/CategoryImage-7.png"),
  },
  {
    id: 2,
    title: "Healthy",
    imgUrl: require("../../../assets/images/browse/CategoryImage-8.png"),
  },
  {
    id: 3,
    title: "Pizza",
    imgUrl: require("../../../assets/images/browse/CategoryImage-9.png"),
  },
  {
    id: 4,
    title: "Asian",
    imgUrl: require("../../../assets/images/browse/CategoryImage-10.png"),
  },
  {
    id: 5,
    title: "Bakery",
    imgUrl: require("../../../assets/images/browse/CategoryImage-11.png"),
  },
  {
    id: 6,
    title: "Sandwich",
    imgUrl: require("../../../assets/images/browse/CategoryImage-12.png"),
  },
  {
    id: 7,
    title: "Sushi",
    imgUrl: require("../../../assets/images/browse/CategoryImage-13.png"),
  },
  {
    id: 8,
    title: "Korean",
    imgUrl: require("../../../assets/images/browse/CategoryImage-14.png"),
  },
  {
    id: 9,
    title: "Vietnamese",
    imgUrl: require("../../../assets/images/browse/CategoryImage-15.png"),
  },
  {
    id: 10,
    title: "Vegan",
    imgUrl: require("../../../assets/images/browse/CategoryImage-16.png"),
  },
  {
    id: 11,
    title: "Bubble Tea",
    imgUrl: require("../../../assets/images/browse/CategoryImage-17.png"),
  },
  {
    id: 12,
    title: "Juice & Smoothies",
    imgUrl: require("../../../assets/images/browse/CategoryImage-18.png"),
  },
  {
    id: 13,
    title: "Burgers",
    imgUrl: require("../../../assets/images/browse/FreeShipping.png"),
  },
];

function Browse({ navigation }) {
  const offerList = [
    {
      id: 0,
      title: "Breakfast & Brunch",
      imgUrl: require("../../../assets/images/browse/CategoryImage.png"),
    },
    {
      id: 1,
      title: "Coffe & Tea",
      imgUrl: require("../../../assets/images/browse/CategoryImage-1.png"),
    },
    {
      id: 2,
      title: "Deals",
      imgUrl: require("../../../assets/images/browse/CategoryImage-2.png"),
      handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { num: 1 }),
    },
    {
      id: 3,
      title: "Restaurant Rewards",
      imgUrl: require("../../../assets/images/browse/CategoryImage-3.png"),
      handlePress: () => navigation.navigate(ROUTES.DEALS_SCREEN, { num: 2 }),
    },
    {
      id: 4,
      title: "Best Overall",
      imgUrl: require("../../../assets/images/browse/CategoryImage-4.png"),
    },
    {
      id: 5,
      title: "Shipped free",
      imgUrl: require("../../../assets/images/browse/CategoryImage-5.png"),
    },
  ];
  return (
    <Container>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 22,
          paddingBottom: 70,
          paddingTop: 20,
        }}
      >
        <Search />

        <Title style={{ marginTop: 15 }}>Top Categories</Title>
        <InnerContainer>
          {offerList.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={item.handlePress}
              />
            );
          })}
        </InnerContainer>
        <Title>All Categories</Title>
        <InnerContainer>
          {browseList.map((item) => {
            return (
              <BrowseCard
                key={item.id}
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
              />
            );
          })}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
}

export default Browse;
