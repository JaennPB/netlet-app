import React from "react";
import { ActivityIndicator } from "react-native";
import { Button, Heading, Flex } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { useGetCryptosQuery } from "../services/cryptoApi";

import millify from "millify";
import CoinCard from "./CoinCard";

const CryptosHomeSection = () => {
  const { data, isFetching } = useGetCryptosQuery("coinsHome");
  const coinsData = data?.data?.coins;

  const navigation = useNavigation();

  const navigateToSeeMoreHandler = () => {
    navigation.navigate("CryptosScreen");
  };

  return (
    <Flex direction="row" flexWrap="wrap" justify="space-between">
      <Flex direction="row" justify="space-between" align="center" w="100%">
        <Heading mb={5} pt={5}>
          Cryptocurrencies
        </Heading>
        <Button variant="ghost" onPress={navigateToSeeMoreHandler}>
          See more
        </Button>
      </Flex>
      {isFetching ? (
        <ActivityIndicator size="large" animating color="#0C3846" />
      ) : (
        coinsData.map((coin) => (
          <CoinCard
            position={coin.rank}
            name={coin.name}
            price={millify(coin.price)}
            marketCap={millify(coin.marketCap)}
            dailyChange={millify(coin.change)}
            color={coin.color}
            key={coin.id}
          />
        ))
      )}
    </Flex>
  );
};

export default CryptosHomeSection;
