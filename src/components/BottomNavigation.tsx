import React from "react";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Feed from "../screens/Landing/Feed";
import { NavigationListProps } from "../models";
import { HomeIcon, SearchIcon, ReelsIcon, LikeIcon } from "../constants/icons";
import Search from "../screens/Landing/Search";
import Reels from "../screens/Landing/Reels";
import Likes from "../screens/Landing/Likes";
import Profile from "../screens/Landing/Profile";
import Icon from "./Icon";
const Tab = createMaterialTopTabNavigator();

const NavigationsData: NavigationListProps[] = [
  {
    name: "Home",
    iconUrl: HomeIcon,
    component: Feed,
  },
  {
    name: "Search",
    iconUrl: SearchIcon,
    component: Search,
  },
  {
    name: "Reels",
    iconUrl: ReelsIcon,
    component: Reels,
  },
  {
    name: "Like",
    iconUrl: LikeIcon,
    component: Likes,
  },
  {
    name: "Profile",
    iconUrl: HomeIcon,
    component: Profile,
  },
];

const renderIcon = (iconUrl: string) => {
  return <Icon url={iconUrl} />;
};

const BottomNavigation = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator tabBarPosition="bottom">
        {NavigationsData.map(
          ({ name, iconUrl, component }: NavigationListProps, index) => (
            <Tab.Screen
              name={name}
              options={{
                tabBarShowLabel: false,
                tabBarIcon: () => renderIcon(iconUrl),
              }}
              //@ts-ignore
              component={component}
            />
          )
        )}
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default BottomNavigation;
