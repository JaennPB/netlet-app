import React from "react";
import { Button } from "native-base";

const CustomButton = (props) => {
  return (
    <Button
      w="100%"
      mt={5}
      variant={props.variant}
      borderColor={props.primary ? null : "muted.500"}
      _text={{ color: props.primary ? "white" : "muted.500" }}
      onPress={props.onPress}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
