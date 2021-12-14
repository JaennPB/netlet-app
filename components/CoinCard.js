import React from "react";
import { Box, Divider, Flex, Heading, Text } from "native-base";

const CoinCard = (props) => {
  return (
    <Box
      w="48%"
      px={2}
      py={2}
      rounded={5}
      alignItems="flex-start"
      mb={5}
      borderColor={props.color}
      borderWidth={1.5}
    >
      <Flex direction="row" align="center">
        <Heading size="xs" mr={1}>
          {props.position}.
        </Heading>
        <Heading size="xs">{props.name}</Heading>
      </Flex>
      <Divider my={1} />
      <Flex>
        <Text>Price: {props.price}</Text>
        <Text>Market cap: {props.marketCap}</Text>
        <Text>Daily change: {props.dailyChange}%</Text>
      </Flex>
    </Box>
  );
};

export default CoinCard;
