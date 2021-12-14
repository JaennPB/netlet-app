import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";

import millify from "millify";

import { Flex, Input } from "native-base";

import CoinCard from "../components/CoinCard";

import { useGetCryptosQuery } from "../services/cryptoApi";

const CryptosScreen = () => {
  const { data, isFetching } = useGetCryptosQuery("coinsScreen");

  //TODO: use FlatList for performance

  const [cryptos, setCryptos] = React.useState([]);
  const [searchItem, setSearchItem] = React.useState("");

  React.useEffect(() => {
    const filteredData = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    setCryptos(filteredData);
  }, [searchItem, data]);

  return (
    <ScrollView>
      <Input
        mb={3}
        variant="rounded"
        placeholder="Search Cryptocurrencies"
        value={searchItem}
        onChangeText={(value) => setSearchItem(value)}
      />
      <Flex
        direction="row"
        flexWrap="wrap"
        justify="space-between"
        px={5}
        py={5}
      >
        {isFetching ? (
          <ActivityIndicator size="large" animating color="#0C3846" />
        ) : (
          cryptos?.map((coin) => (
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
    </ScrollView>
  );
};

export default CryptosScreen;
