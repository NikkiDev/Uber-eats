import { View, Text, Image } from "react-native";
import styled from "styled-components";
import Button from "../atoms/Button";

import Screen from "../atoms/Screen";
import RestDetailsCard from "../organisms/RestDetailsCard";

// const Container = styled(Screen)`
//   padding: 20px;
// `;

const Container = styled.ScrollView`
  padding: 20px;
`;

const HeaderContainer = styled.View``;

const RestTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;

  color: #000000;
`;

const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RestInfo = styled.Text``;

const SectionTitle = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 18px;

  color: #000000;
`;
const SectionContainer = styled.View``;

const data = {
  restaurant: {
    name: "Random name",
    category: "Pizza",
    rating: "4.6",
    ratingQuantity: 300,
    workingHours: "Open until 3:00 AM",
  },
  mostPopular: [
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
      imgUrl: require("../../../assets/images/pizzaOne.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
      imgUrl: require("../../../assets/images/pizzaOne.png"),
    },
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
      imgUrl: require("../../../assets/images/pizzaOne.png"),
    },
  ],
  pickedForYou: [
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
    },
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
    },
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
      saleQuantity: 200,
    },
  ],
  ourSpecialPizza: [
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
    },
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
    },
    {
      title: "McMushroom Pizza",
      price: "21.00",
      desc: "Some random description for restaurant",
    },
  ],
};

const ratingImage = require("../../../assets/images/ratingFilled.png");

const RestaurantDetails = ({ route, navigation }) => {
  const rest = data.restaurant;
  console.log(route.params);

  const calcRating = (num) => {
    if (num > 200) {
      return "200+ Rating";
    } else {
      return num;
    }
  };
  return (
    <Container>
      <HeaderContainer>
        <RestTitle>{rest.name}</RestTitle>
        <InfoContainer>
          <View style={{ marginRight: 3 }}>
            <Image source={ratingImage} />
          </View>
          <RestInfo>
            {rest.rating}({calcRating(rest.ratingQuantity)}) / {rest.category}/
            $$
          </RestInfo>
        </InfoContainer>
        <Text>{rest.workingHours}</Text>
      </HeaderContainer>
      <View style={{ height: 150 }}></View>

      <SectionContainer>
        <SectionTitle>Most Popular</SectionTitle>
        {data.mostPopular.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Picked for You</SectionTitle>
        {data.pickedForYou.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
            />
          );
        })}
      </SectionContainer>
      <SectionContainer>
        <SectionTitle>Our Special Pizza</SectionTitle>
        {data.ourSpecialPizza.map((item) => {
          return (
            <RestDetailsCard
              title={item.title}
              subtitle={item.price}
              desc={item.desc}
            />
          );
        })}
      </SectionContainer>
    </Container>
  );
};

export default RestaurantDetails;
