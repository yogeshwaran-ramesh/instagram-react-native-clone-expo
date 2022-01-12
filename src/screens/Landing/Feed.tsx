import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Header from "../../components/Header";
import Postlayout from "../../components/Postlayout";
import StoriesLayout from "../../components/StoriesLayout";

const Feed: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <StoriesLayout />
        <Postlayout />
      </ScrollView>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
});
