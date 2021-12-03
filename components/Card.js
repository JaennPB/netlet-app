import React from "react";
import { Box } from "native-base";

const Card = (props) => {
  return (
    <Box
      w="100%"
      alignItems="center"
      px={10}
      py={5}
      rounded={5}
      borderColor="muted.500"
      borderWidth={1}
    >
      {props.children}
    </Box>
  );
};

export default Card;
