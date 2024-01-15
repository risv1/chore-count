import React from "react";
import { View, Text, Pressable } from "react-native";

const Home = ({ navigation }: { navigation: any }) => {
  const pressHandler = () => {
    navigation.navigate("Chores");
  };

  return (
    <View style={{ flexDirection: 'column', gap: 10, alignItems: 'center' }}>
      <Text style={{ fontWeight: "bold", color: "black" }}>Home Page</Text>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) => [
          {
            padding: 5,
            height: 40,
            backgroundColor: pressed ? "purple" : "indigo",
          },
          { borderRadius: 8 },
        ]}
      >
        <Text style={{ color: "white" }}>All Chores</Text>
      </Pressable>
    </View>
  );
};

export default Home;
