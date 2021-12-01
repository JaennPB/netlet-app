import React from "react";
import { Input, Text, Box } from "native-base";

const CustomInput = (props) => {
  return (
    <Box w="100%">
      <Box>
        <Text fontSize="lg" color="muted.300">
          {props.title}
        </Text>
      </Box>
      <Input
        mb={3}
        variant={props.variant}
        placeholder={props.placeholder}
        InputLeftElement={props.icon}
        type={props.type}
        borderColor="muted.300"
        color="muted.300"
      />
    </Box>
  );
};

export default CustomInput;
