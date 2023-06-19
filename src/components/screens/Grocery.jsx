import { ScrollView } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";

import Screen from "../atoms/Screen";
import GroceryCard from "../organisms/GroceryCard";
import { groceryShops } from "../../data/appData";

const Container = styled(Screen)``;

const InnerContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled(GroceryCard)`
  margin-bottom: 16px;
`;

const Grocery = () => {
  const [grocery, setGrocery] = useState(groceryShops);

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <InnerContainer style={{ paddingHorizontal: 22 }}>
          {grocery.map((item, idx) => {
            return (
              <Card
                key={idx}
                color={item.color}
                imgUrl={item.imgUrl}
                deliveryTime={item.deliveryTime}
              />
            );
          })}
        </InnerContainer>
      </ScrollView>
    </Container>
  );
};

export default Grocery;
