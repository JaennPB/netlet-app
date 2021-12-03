import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { Icon, Heading } from "native-base";

import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "../firebase";

import { useNavigation } from "@react-navigation/native";

import Card from "../components/Card";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const auth = getAuth();

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) return;
      console.log(user);
      //TODO: nav.replace('home')
    });
    return unsubscribe;
  }, [username]);

  const signUpUserHandler = () => {
    if (password !== password2) {
      console.log("passwords dont match");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("created");
        updateProfile(auth.currentUser, {
          displayName: username,
        })
          .then(() => {
            console.log("updated");
            console.log(auth.currentUser.displayName);
          })
          .catch();
      })
      .catch();
  };

  const switchToLoginHandler = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Card>
        <Heading mb="5" size="xl" fontWeight="medium">
          Sign Up
        </Heading>
        <CustomInput
          title="Username"
          variant="underlined"
          placeholder="Your username"
          icon={
            <Icon
              as={<MaterialIcons name="person-outline" />}
              size={5}
              ml={2}
              color="muted.400"
            />
          }
          type="text"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />

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
        <CustomInput
          title="Confirm password"
          variant="underlined"
          placeholder="Confirm password"
          icon={
            <Icon
              as={<MaterialCommunityIcons name="account-lock-outline" />}
              size={5}
              ml={2}
              color="muted.400"
            />
          }
          type="password"
          value={password2}
          onChangeText={(password2) => setPassword2(password2)}
        />
        <CustomButton title="Sign up" primary onPress={signUpUserHandler} />
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
  },
});
