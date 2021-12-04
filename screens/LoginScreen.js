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

  React.useEffect(() => {
    console.log("run login");
  });

  const switchToSignUpHandler = () => {
    navigation.goBack();
  };

  const loginHandler = () => {
    navigation.navigate("MainApp");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Card>
        <Heading mb="5" size="xl" fontWeight="medium">
          Login
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
              color="muted.400"
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
              color="muted.400"
            />
          }
          type="password"
        />
        <CustomButton title="Login" primary onPress={loginHandler} />
      </Card>
      <CustomButton
        title="Don't have an account"
        variant="outline"
        onPress={switchToSignUpHandler}
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
  },
});
