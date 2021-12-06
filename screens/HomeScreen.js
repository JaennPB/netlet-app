import React from "react";
import { View, Text } from "react-native";

import { getAuth } from "../firebase";

import { useGetCryptosQuery } from "../services/cryptoApi";

import millify from "millify";

const HomeScreen = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const auth = getAuth();
  const [username, setUsername] = React.useState(null);

  React.useEffect(() => {
    setUsername(auth.currentUser.displayName);
  }, []);

  if (isFetching) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View>
        <Text>Hey</Text>
        <Text>It's me {username}</Text>
        <Text>{millify(data.data.stats.total)}</Text>
      </View>
    );
  }
};

export default HomeScreen;
