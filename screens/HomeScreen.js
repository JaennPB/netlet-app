import React from "react";
import { ScrollView } from "react-native";
import { Heading, VStack } from "native-base";

import { getAuth } from "../firebase";

import GlobalHomeSection from "../components/GlobalHomeSection";
import CryptosHomeSection from "../components/CryptosHomeSection";
import NewsHomeSection from "../components/NewsHomeSection";

const HomeScreen = () => {
  const auth = getAuth();
  const [username, setUsername] = React.useState(
    auth?.currentUser?.displayName
  );

  return (
    <ScrollView>
      <VStack flex={1} px={5} py={5}>
        <Heading mb={5}>Hello {username}! Welcome back 👋</Heading>
        <GlobalHomeSection />
        <CryptosHomeSection />
        <NewsHomeSection />
      </VStack>
    </ScrollView>
  );
};

export default HomeScreen;
