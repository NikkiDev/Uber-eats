import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";
import styled from "styled-components/native";
import { Portal } from "react-native-portalize";
import BottomSheet from "../atoms/BottomSheet";

import MainCard from "../organisms/MainCard";
import Screen from "../atoms/Screen";
import CtgrBtn from "../atoms/CtgrBtn";

import * as ROUTES from "../../constants/routes";
import Button from "../atoms/Button";
import CategoryCard from "../atoms/CategoryCard";

const ctgrListItems = [
  {
    id: 0,
    title: "Convenience",
    imgUrl: require("../../../assets/images/pic1.png"),
  },
  {
    id: 1,
    title: "Alcohol",
    imgUrl: require("../../../assets/images/pic2.png"),
  },
  {
    id: 2,
    title: "Pet Supplies",
    imgUrl: require("../../../assets/images/pic3.png"),
  },
  {
    id: 3,
    title: "Flowers",
    imgUrl: require("../../../assets/images/pic4.png"),
  },
  {
    id: 4,
    title: "Grocery",
    imgUrl: require("../../../assets/images/pic5.png"),
  },
  {
    id: 5,
    title: "American",
    imgUrl: require("../../../assets/images/pic6.png"),
  },
  {
    id: 6,
    title: "Speciality",
    imgUrl: require("../../../assets/images/pic7.png"),
  },
  {
    id: 7,
    title: "Takeout",
    imgUrl: require("../../../assets/images/pic8.png"),
  },
  {
    id: 8,
    title: "Asian",
    imgUrl: require("../../../assets/images/pic9.png"),
  },
  {
    id: 9,
    title: "Ice Cream",
    imgUrl: require("../../../assets/images/pic10.png"),
  },
  {
    id: 10,
    title: "Halal",
    imgUrl: require("../../../assets/images/pic11.png"),
  },
  {
    id: 11,
    title: "Retails",
    imgUrl: require("../../../assets/images/pic12.png"),
  },
  {
    id: 12,
    title: "Carribean",
    imgUrl: require("../../../assets/images/pic13.png"),
  },
  {
    id: 13,
    title: "Indian",
    imgUrl: require("../../../assets/images/pic14.png"),
  },
  {
    id: 14,
    title: "French",
    imgUrl: require("../../../assets/images/pic15.png"),
  },
  {
    id: 15,
    title: "Fast Foods",
    imgUrl: require("../../../assets/images/pic16.png"),
  },
  {
    id: 16,
    title: "Burger",
    imgUrl: require("../../../assets/images/pic17.png"),
  },
  {
    id: 17,
    title: "Ride",
    imgUrl: require("../../../assets/images/pic18.png"),
  },
  {
    id: 18,
    title: "Chinese",
    imgUrl: require("../../../assets/images/pic19.png"),
  },
  {
    id: 19,
    title: "Dessert",
    imgUrl: require("../../../assets/images/pic20.png"),
  },
];

let data = { object: [ctgrListItems] };

const getData = () => [data.object];

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
const dineInList = [
  {
    id: 0,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "DINE IN",
    price: "0.29",
    deliveryTime: "10-25",
    rating: 4.4,
    promQuantity: null,
    promPrice: null,
  },
  {
    id: 1,
    imgUrl: require("../../../assets/images/mainCardImg.png"),
    title: "DINE IN",
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
    title: "African Flavour",
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

const RenderComponent = ({ firstName, lastName }) => {
  return (
    <View style={styles.container}>
      <Text>{firstName}</Text>
      <Text>{lastName}</Text>
    </View>
  );
};

const Container = styled(Screen)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  padding: 30px 20px 0 20px;
  background-color: "#FFFFFF";
`;

const InnerContainer = styled.View``;

{
  /* <MainCard
  key={item.id}
  imgUrl={item.imgUrl}
  title={item.title}
  price={item.price}
  deliveryTime={item.deliveryTime}
  rating={item.rating}
  promotion={item.promotion}
  promQuantity={item.promQuantity}
  promPrice={item.promPrice}
/>; */
}

const HeaderComponent = () => {
  return <View style={{ height: 300 }}></View>;
};

const SortContainer = styled.View``;

const SortTopContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 23px;
`;

const SortBottomContainer = styled.View`
  height: 25px;
  margin: 20px 0 20px 0;
  display: flex;
  align-items: center;
`;

const Location = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #000000;
`;

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
`;

const CategoryBtn = styled(CtgrBtn)`
  margin-right: 15px;
`;

const CtgrBtnWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

function Home({ navigation }) {
  const [ctgr, setCtgr] = useState(0);

  const categorySheetRef = useRef();

  const [data, setData] = useState([]);

  const fetchData = () => {
    if (ctgr === 0) {
      setData(deliveryList);
    } else if (ctgr === 1) {
      setData(pickupList);
    } else {
      setData(dineInList);
    }
  };

  const handlePress = (value) => {
    setCtgr(value);
  };

  const btns = [
    { title: "Delivery", value: 0 },
    { title: "Pickup", value: 1 },
    { title: "Dine-In", value: 2 },
  ];

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  });

  const renderItem = (item) => (
    <CategoryBtn
      title={item.title}
      imgUrl={item.imgUrl}
      onPress={() => console.log(item.title)}
    />
  );

  return (
    <Container>
      <InnerContainer>
        <SortContainer>
          <SortTopContainer>
            {btns.map((item, idx) => {
              return (
                <CategoryBtn
                  key={idx}
                  title={item.title}
                  onPress={() => handlePress(item.value)}
                  light={item.value === ctgr ? true : false}
                />
              );
            })}
          </SortTopContainer>

          <SortBottomContainer>
            <Location>New London</Location>
          </SortBottomContainer>
          <CtgrBtnWrapper>
            <CategoryCard
              title={ctgrListItems[0].title}
              imgUrl={ctgrListItems[0].imgUrl}
            />
            <CategoryCard
              title={ctgrListItems[1].title}
              imgUrl={ctgrListItems[1].imgUrl}
            />
            <CategoryCard
              title={ctgrListItems[2].title}
              imgUrl={ctgrListItems[2].imgUrl}
            />
            <CategoryCard
              title="More"
              imgUrl={require("../../../assets/images/threeDots.png")}
              onPress={() => categorySheetRef.current.open()}
            />
          </CtgrBtnWrapper>
        </SortContainer>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <MainCard
              key={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              price={ctgr === 0 ? item.price : ""}
              distance={ctgr === 1 ? item.distance : ""}
              deliveryTime={item.deliveryTime}
              rating={item.rating}
              promotion={ctgr === 0 ? item.promotion : ""}
              promQuantity={item.promQuantity}
              promPrice={item.promPrice}
              onPress={() =>
                navigation.navigate(ROUTES.REST_DETAILS, { id: item.id })
              }
            />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </InnerContainer>

      <Portal>
        <BottomSheet
          bottomSheetRef={categorySheetRef}
          modalHeight={700}
          flatListProps={{
            data: getData(),
            renderItem: renderItem,
            keyExtractor: (item) => item.id,
            showsVerticalScrollIndicator: false,
          }}
        >
          {/* <FlatList
            data={ctgrListItems}
            renderItem={({ item }) => (
              <CategoryBtn
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
              />
            )}
            horizontal={false}
            numColumns={3}
            keyExtractor={(item) => item.id}
          /> */}

          <View
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              height: 700,
              paddingTop: 30,
              paddingHorizontal: 15,
            }}
          >
            {ctgrListItems.map((item) => (
              <CategoryCard
                title={item.title}
                imgUrl={item.imgUrl}
                onPress={() => console.log(item.title)}
                key={item.id}
                withMarginBottom
              />
            ))}
          </View>
        </BottomSheet>
      </Portal>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: "100%",
    backgroundColor: "red",
    marginBottom: 5,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Home;
