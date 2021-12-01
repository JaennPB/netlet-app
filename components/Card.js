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
      borderColor="muted.300"
      borderWidth={0.5}
    >
      {props.children}
    </Box>
  );
};

export default Card;
