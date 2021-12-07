import { Box, Text, Heading } from "native-base";
import React from "react";

const StatCard = (props) => {
  return (
    <Box
      w="48%"
      alignItems="center"
      px={2}
      py={2}
      rounded={5}
      alignItems="flex-start"
      mb={5}
    >
      <Heading size="sm" color="muted.500" mb={2} fontWeight="thin">
        {props.stat}
      </Heading>
      <Text bold>{props.info}</Text>
    </Box>
  );
};

export default StatCard;
