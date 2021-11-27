import React from "react";
import { NativeBaseProvider, extendTheme, Center } from "native-base";
import { StatusBar } from "native-base";

import LoginScreen from "./screens/LoginScreen";

const brandTheme = {
  brand: {
    primary: "#31313B",
    secondary: "#41414E",
    accent: "#FFC801",
  },
};

const customTheme = extendTheme({ colors: brandTheme });

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={brandTheme.brand.primary}
      />
      <NativeBaseProvider theme={customTheme}>
        <Center flex={1} bg="brand.primary">
          <LoginScreen />
        </Center>
      </NativeBaseProvider>
    </>
  );
};

export default App;
