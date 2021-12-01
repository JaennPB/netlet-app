import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Icon, Heading } from "native-base";

import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();

  const switchToLoginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Card>
        <Heading mb="5" size="xl" fontWeight="medium" color="muted.300">
          Sign Up
        </Heading>
        <CustomInput
          title="Email"
          variant="underlined"
          placeholder="Your email"
          icon={
            <Icon
              as={<MaterialCommunityIcons name="email-outline" />}
              size={5}
              ml={2}
              color="muted.300"
            />
          }
          type="text"
        />
        <CustomInput
          title="Password"
          variant="underlined"
          placeholder="Password"
          icon={
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              size={5}
              ml={2}
              color="muted.300"
            />
          }
          type="password"
        />
        <CustomInput
          title="Confirm password"
          variant="underlined"
          placeholder="Confirm password"
          icon={
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              size={5}
              ml={2}
              color="muted.300"
            />
          }
          type="password"
        />
        <CustomButton title="Sign up" primary />
      </Card>
        <CustomButton
          title="Already have an account"
          variant="outline"
          onPress={switchToLoginHandler}
        />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#0C3846",
  },
});
