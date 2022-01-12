import React from "react";
import { View, FlatList } from "react-native";
import Post from "./Post";
import { PostData } from "../constants/data";

const Postlayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={PostData}
        keyExtractor={(item) => {
          return item.name;
        }}
        renderItem={(data) => {
          const { item, index } = data;
          return <Post {...item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Postlayout;
