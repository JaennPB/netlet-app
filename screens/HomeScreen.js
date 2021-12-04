import React from "react";
import { View, Text } from "react-native";

import { getAuth } from "../firebase";

const HomeScreen = () => {
  const auth = getAuth();
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    setUsername(auth.currentUser.displayName);
  }, []);

  return (
    <View>
      <Text>hey</Text>
      <Text>its me {username}</Text>
    </View>
  );
};

export default HomeScreen;
