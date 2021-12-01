import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../../screens/HomeScreen";
import CryptosScreen from "../../screens/CryptosScreen";
import ExchangesScreen from "../../screens/ExchangesScreen";
import NewsScreen from "../../screens/NewsScreen";

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerStyle: { backgroundColor: "#0C3846" },
        headerTintColor: "white",
        drawerStyle: { backgroundColor: "#0C3846" },
        drawerLabelStyle: { color: "white" },
      }}
    >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: "Home", title: "Home" }}
      />
      <Drawer.Screen
        name="CryptosScreen"
        component={CryptosScreen}
        options={{ headerTitle: "Cryptocurrencies", title: "Cryptocurrencies" }}
      />
      <Drawer.Screen
        name="ExchangesScreen"
        component={ExchangesScreen}
        options={{ headerTitle: "Exchanges", title: "Exchanges" }}
      />
      <Drawer.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={{ headerTitle: "News", title: "News" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
