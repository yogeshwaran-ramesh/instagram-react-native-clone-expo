import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface StoryProps {
  imageUri: string;
  name: string;
}
const Story: React.FC<StoryProps> = ({ imageUri, name }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={["#fdf497", "#fd5949", "#d6249f"]}
        style={styles.gradient}
      >
        <Image style={styles.image} source={{ uri: imageUri }} />
      </LinearGradient>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};
export default Story;
const styles = StyleSheet.create({
  gradient: {
    borderRadius: 50,
    height: 70,
    width: 70,
    margin: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    textTransform: "lowercase",
  },
  image: {
    height: 65,
    width: 65,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "white",
  },
});
