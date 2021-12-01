import React from "react";
import { View, StyleSheet } from "react-native";
import { NativeBaseProvider, StatusBar } from "native-base";

import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
import DrawerNav from "./components/navigation/DrawerNav";

import store from "./app/store";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.backscreen}>
        <StatusBar barStyle="light-content" backgroundColor="#0C3846" />
        <NavigationContainer>
          <NativeBaseProvider>
            <Stack.Navigator
              screenOptions={{ headerShown: false }}
              initialRouteName="SignUpScreen"
            >
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="MainApp" component={DrawerNav} />
            </Stack.Navigator>
          </NativeBaseProvider>
        </NavigationContainer>
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  backscreen: {
    flex: 1,
    backgroundColor: "#0C3846",
  },
});
