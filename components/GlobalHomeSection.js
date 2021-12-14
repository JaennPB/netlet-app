import React from "react";
import { ActivityIndicator } from "react-native";
import { Heading, Flex } from "native-base";

import { useGetCryptosQuery } from "../services/cryptoApi";

import millify from "millify";

import StatCard from "./StatCard";

const GlobalHomeSection = () => {
  const { data, isFetching } = useGetCryptosQuery("globalStats");
  const globalStats = data?.data?.stats;

  return (
    <Flex direction="row" flexWrap="wrap" justify="space-between">
      <Heading mb={5} pt={5}>
        Global Crypto Stats
      </Heading>
      {isFetching ? (
        <ActivityIndicator size="large" animating color="#0C3846" />
      ) : (
        <>
          <StatCard stat="Total Cryptos" info={millify(globalStats.total)} />
          <StatCard
            stat="Total Exchanges"
            info={millify(globalStats.totalExchanges)}
          />
          <StatCard
            stat="Total Market Cap"
            info={millify(globalStats.totalMarketCap)}
          />
          <StatCard
            stat="Total 24h Volume"
            info={millify(globalStats.total24hVolume)}
          />
          <StatCard
            stat="Total Markets"
            info={millify(globalStats.totalMarkets)}
          />
        </>
      )}
    </Flex>
  );
};

export default GlobalHomeSection;
