import React from "react";
import { Box, Input, Icon, Text, Heading, Button } from "native-base";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  return (
    <Box
      w="90%"
      bg="brand.secondary"
      alignItems="center"
      px={5}
      py={5}
      rounded={5}
    >
      <Heading color="brand.accent" mb="5" size="xl" fontWeight="medium">
        Sign Up
      </Heading>
      <Box w="90%" mb={2}>
        <Text color="muted.400" fontSize="lg">
          Email
        </Text>
      </Box>
      <Input
        variant="underlined"
        placeholder="Email"
        w="90%"
        mb={5}
        InputLeftElement={
          <Icon
            as={<MaterialCommunityIcons name="email-outline" />}
            size={5}
            color="muted.400"
            ml={2}
          />
        }
      />
      <Box w="90%" mb={2}>
        <Text color="muted.400" fontSize="lg">
          Password
        </Text>
      </Box>
      <Input
        variant="underlined"
        placeholder="Password"
        w="90%"
        mb={5}
        InputLeftElement={
          <Icon
            as={<MaterialCommunityIcons name="account-lock-outline" />}
            size={5}
            color="muted.400"
            ml={2}
          />
        }
      />
      <Button w="90%" mt={5} bg="brand.accent">
        Sign up
      </Button>
      <Button
        w="90%"
        mt={5}
        variant="outline"
        borderColor="brand.accent"
        _text={{ color: "brand.accent" }}
      >
        Already have an account
      </Button>
    </Box>
  );
};

export default LoginScreen;
