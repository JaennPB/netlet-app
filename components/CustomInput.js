import React from "react";
import { Input, Text, Box } from "native-base";

const CustomInput = (props) => {
  return (
    <Box w="100%">
      <Box>
        <Text fontSize="lg">{props.title}</Text>
      </Box>
      <Input
        mb={3}
        variant={props.variant}
        placeholder={props.placeholder}
        InputLeftElement={props.icon}
        type={props.type}
        value={props.value}
        onChangeText={props.onChangeText}
      />
    </Box>
  );
};

export default CustomInput;
