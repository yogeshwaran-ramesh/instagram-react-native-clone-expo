import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { LogoIcon, AddIcon, MessengerIcon } from "../constants/icons";
import Icon from "./Icon";

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon style={styles.logoIcon} url={LogoIcon} />
      <View style={styles.alignSpaceBetween}>
        <Icon url={AddIcon} style={styles.iconMargin} />
        <Icon url={MessengerIcon} style={styles.iconMargin} />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
  },
  alignSpaceBetween: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconMargin: {
    marginHorizontal: 8,
  },
  logoIcon: {
    height: 40,
    width: 105,
    marginHorizontal: 6,
  },
});
