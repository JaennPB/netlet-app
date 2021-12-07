import React from "react";
import { Box, Divider, Flex, Heading, Text } from "native-base";
import { SvgCssUri } from "react-native-svg";

const CoinCard = (props) => {
  return (
    <Box
      w="48%"
      px={2}
      py={2}
      rounded={5}
      alignItems="flex-start"
      mb={5}
      borderColor="muted.500"
      borderWidth={1}
    >
      <Flex direction="row" align="center">
        <Heading size="xs">{props.position}.</Heading>
        <Heading size="xs">{props.name}</Heading>
        {/* <SvgCssUri height="10%" width="10%" uri={props.icon} /> */}
      </Flex>
      <Divider />
      <Flex>
        <Text>Price: {props.price}</Text>
        <Text>Market cap: {props.marketCap}</Text>
        <Text>Daily change: {props.dailyChange}%</Text>
      </Flex>
    </Box>
  );
};

export default CoinCard;
