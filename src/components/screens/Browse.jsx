import { ScrollView, Text } from "react-native";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesome } from "@expo/vector-icons";

import BrowseCard from "../atoms/BrowseCard";
import Screen from "../atoms/Screen";
import TextInput from "../atoms/TextInput";

import { offerList, browseList } from "../../data/appData";
import { User } from "../../UserProvider";

import IconTitle from "../atoms/IconTitle";
import SearchInput from "../atoms/SearchInput";

const Container = styled(Screen)``;

const Wrapper = styled.View`
  padding: 0 12px;
`;

const Search = styled(SearchInput)``;

const InnerContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 27px;
`;

const SearchContainer = styled.View`
  width: 100%;
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

const SearchTitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #6b6b6b;
  margin-bottom: 21px;
`;

function Browse({ navigation }) {
  const [offers, setOffers] = useState(offerList);
  const [browse, setBrowse] = useState(browseList);

  const [search, setSearch] = useState(false);

  const [value, setValue] = useState("");

  const [recents, setRecents] = useState([]);

  const user = User();

  const handleBlur = () => {
    setRecents([...recents, value]);
  };

  const onTextChange = (text) => {
    setValue(text);
    console.log(value);
    if (value === "") {
      setSearch(false);
    }
  };

  return (
    <Container>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 70,
          paddingTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <Search
          value={value}
          onChangeText={(text) => onTextChange(text)}
          onFocus={() => setSearch(true)}
          placeholder="placeholder"
          onBlur={handleBlur}
        />
        {search ? (
          <Wrapper>
            {recents.length !== 0 && (
              <SearchContainer>
                <SearchTitle>Recent searches</SearchTitle>
                {recents.map((item, idx) => {
                  return (
                    <IconTitle
                      key={idx}
                      title={item}
                      icon={
                        <FontAwesome name="search" size={20} color="black" />
                      }
                      onPress={() => console.log(item)}
                    />
                  );
                })}
              </SearchContainer>
            )}
            <SearchContainer>
              <SearchTitle>Top Categories</SearchTitle>
              {browse.map((item) => {
                return (
                  <IconTitle
                    key={item.id}
                    title={item.title}
                    icon={<FontAwesome name="search" size={20} color="black" />}
                    onPress={() => console.log(item.title)}
                  />
                );
              })}
            </SearchContainer>
          </Wrapper>
        ) : (
          <Wrapper>
            {user && <Text>{user.userName}</Text>}

            <Title style={{ marginTop: 15 }}>Top Categories</Title>
            <InnerContainer>
              {offers.map((item) => {
                return (
                  <BrowseCard
                    key={item.id}
                    title={item.title}
                    imgUrl={item.imgUrl}
                    onPress={() =>
                      navigation.navigate(item.routeName, { num: item.type })
                    }
                  />
                );
              })}
            </InnerContainer>
            <Title>All Categories</Title>
            <InnerContainer>
              {browse.map((item) => {
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
          </Wrapper>
        )}
      </ScrollView>
    </Container>
  );
}

export default Browse;
