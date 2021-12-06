import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { Icon, Heading } from "native-base";

import { useNavigation } from "@react-navigation/native";

import { getAuth, signInWithEmailAndPassword } from "../firebase";

import Card from "../components/Card";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("test@test.com");
  const [password, setPassword] = React.useState("jaennjaenn");
  const [isLoading, setIsLoading] = React.useState(false);
  const auth = getAuth();

  const navigation = useNavigation();

  const switchToSignUpHandler = () => {
    navigation.goBack();
  };

  const loginHandler = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoading(false);
        navigation.replace("MainApp");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {isLoading ? (
        <ActivityIndicator size="large" animating color="#0C3846" />
      ) : (
        <>
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
              value={email}
              onChangeText={(email) => setEmail(email)}
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
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            <CustomButton title="Login" primary onPress={loginHandler} />
          </Card>
          <CustomButton
            title="Don't have an account"
            variant="outline"
            onPress={switchToSignUpHandler}
          />
        </>
      )}
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
