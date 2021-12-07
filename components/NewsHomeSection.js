import React from "react";
import { ActivityIndicator } from "react-native";
import { Button, Heading, Flex, Text } from "native-base";

const CryptosHomeSection = () => {
  const isFetching = false;
  return (
    <Flex direction="row" flexWrap="wrap" justify="space-between">
      <Flex direction="row" justify="space-between" align="center" w="100%">
        <Heading mb={5} pt={5}>
          News
        </Heading>
        <Button variant="ghost">See more</Button>
      </Flex>
      {isFetching ? (
        <ActivityIndicator size="large" animating color="#0C3846" />
      ) : (
        <Text>hi</Text>
      )}
    </Flex>
  );
};

export default CryptosHomeSection;
