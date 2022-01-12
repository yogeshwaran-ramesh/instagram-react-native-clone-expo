import React from "react";
import { Image, StyleSheet } from "react-native";
import { IconTypeProps } from "../models";

const Icon: React.FC<IconTypeProps> = ({ name, url, style }) => {
  return (
    <Image
      style={[styles.icon, style]}
      source={{
        uri: url,
      }}
    />
  );
};

export default Icon;
const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
