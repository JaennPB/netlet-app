import React from "react";
import { ActivityIndicator } from "react-native";
import { Box, Heading, VStack } from "native-base";

import { getAuth } from "../firebase";

import { useGetCryptosQuery } from "../services/cryptoApi";

import StatCard from "../components/StatCard";

import millify from "millify";

const HomeScreen = () => {
  const auth = getAuth();
  const [username, setUsername] = React.useState(
    auth?.currentUser?.displayName
  );
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  return (
    <Box flex={1} px={5} py={5}>
      {isFetching ? (
        <ActivityIndicator size="large" animating color="#0C3846" />
      ) : (
        <>
          <Heading pb={5} mb={5} borderColor="muted.500" borderBottomWidth={1}>
            Hello {username}! Welcome back 👋
          </Heading>
          <Heading mb={5}>Global Crypto Stats</Heading>
          <VStack flexDir="row" flexWrap="wrap" justifyContent="space-between">
            <StatCard
              width="45%"
              stat="Total Cryptos"
              info={millify(globalStats.total)}
            />
            <StatCard
              width="45%"
              stat="Total Exchanges"
              info={millify(globalStats.totalExchanges)}
            />
            <StatCard
              width="45%"
              stat="Total Market Cap"
              info={millify(globalStats.totalMarketCap)}
            />
            <StatCard
              width="45%"
              stat="Total 24h Volume"
              info={millify(globalStats.total24hVolume)}
            />
            <StatCard
              width="45%"
              stat="Total Markets"
              info={millify(globalStats.totalMarkets)}
            />
          </VStack>
        </>
      )}
    </Box>
  );
};

export default HomeScreen;
