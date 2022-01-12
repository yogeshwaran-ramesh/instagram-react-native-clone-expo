import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import { PostFeed } from "../models";
import {
  LikeIcon,
  CommentIcon,
  ShareIcon,
  OptionIcon,
  SaveIcon,
} from "../constants/icons";
import Icon from "./Icon";

const windowWidth = Dimensions.get("window").width;
const Post: React.FC<PostFeed> = ({
  name,
  images,
  likes,
  index,
  comments,
  description,
}) => {
  //header
  const renderPostHeader = () => {
    return (
      <View style={[styles.header, styles.flexRowCenterSpaceBetween]}>
        <View style={styles.flexRowCenterSpaceBetween}>
          <Image
            style={styles.profileImage}
            source={{
              uri: `https://randomuser.me/api/portraits/med/men/${
                index + 10
              }.jpg`,
            }}
          />
          <Text style={[styles.boldFont, styles.lowercase]}>{name}</Text>
        </View>
        <Image
          style={styles.icon}
          source={{
            uri: OptionIcon,
          }}
        />
      </View>
    );
  };

  //Footer components

  //liked Person COllage
  const LikesImageCollage = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <Image
          style={[styles.imageCollage]}
          source={{
            uri: "https://randomuser.me/api/portraits/med/men/87.jpg",
          }}
        />
        <Image
          style={[styles.imageCollage, styles.image2]}
          source={{
            uri: "https://randomuser.me/api/portraits/med/men/77.jpg",
          }}
        />
        <Image
          style={[styles.imageCollage, styles.image3]}
          source={{
            uri: "https://randomuser.me/api/portraits/med/men/89.jpg",
          }}
        />
      </View>
    );
  };

  // likes
  const renderLikes = () => {
    if (likes > 30)
      return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <LikesImageCollage />
          <Text style={[styles.verticalMargin]}>
            Liked by{" "}
            <Text style={[styles.boldFont, styles.lowercase]}>Will</Text> and{" "}
            <Text style={[styles.boldFont]}>{likes - 1}</Text> others
          </Text>
        </View>
      );
    else return <Text style={[styles.boldFont]}>{likes} likes</Text>;
  };

  //like and description
  const renderPostLikesAndDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        {renderLikes()}
        <View style={{ flexDirection: "row" }}>
          <Text style={[styles.boldFont, styles.lowercase]}>{name}</Text>{" "}
          <Text style={{ paddingHorizontal: 3 }}>{description}</Text>
        </View>
      </View>
    );
  };

  const renderFooterActions = () => {
    return (
      <View style={styles.footerIconWrapper}>
        <View style={[styles.leftIcons, styles.flexRowCenterSpaceBetween]}>
          <Icon style={styles.icon} url={LikeIcon} />
          <Icon style={styles.icon} url={CommentIcon} />
          <Icon style={styles.icon} url={ShareIcon} />
        </View>
        <Icon style={styles.icon} url={SaveIcon} />
      </View>
    );
  };

  const renderCommentSection = () => {
    if (comments.length > 1) {
      return (
        <View style={[{ flexDirection: "row" }, styles.verticalMargin]}>
          <Text
            style={[styles.boldFont, { color: "#8e8e8e", fontSize: 15 }]}
          >{`View all ${comments.length} comments`}</Text>{" "}
        </View>
      );
    } else if (comments.length) {
      const [firstComment] = comments;
      return (
        <View style={[{ flexDirection: "row" }, styles.verticalMargin]}>
          <Text style={styles.boldFont}>{firstComment.name}</Text>{" "}
          <Text style={{ paddingHorizontal: 3 }}>{firstComment.comment}</Text>
        </View>
      );
    }
  };

  const renderPostFooter = () => {
    return (
      <View style={styles.footer}>
        {renderFooterActions()}
        {renderPostLikesAndDescription()}
        {renderCommentSection()}
      </View>
    );
  };

  const renderImages = () => {
    return (
      <View style={{ height: 400 }}>
        <FlatList
          data={images}
          keyExtractor={(data) => data}
          bounces={false}
          decelerationRate={0}
          renderToHardwareTextureAndroid
          snapToAlignment="start"
          scrollEventThrottle={16}
          renderItem={({ item, index }) => {
            console.log("data", item);
            return (
              <Image
                source={{
                  uri: `${item}?random=${Math.floor(Math.random() * 10 + 1)}`,
                }}
                style={styles.image}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderPostHeader()}
      {renderImages()}
      {renderPostFooter()}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  verticalMargin: {
    marginVertical: 3,
  },
  boldFont: {
    fontWeight: "600",
  },
  descriptionContainer: {
    paddingTop: 3,
  },
  header: {
    backgroundColor: "white",
    margin: 2,
  },
  footer: {
    padding: 10,
  },
  footerIconWrapper: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },
  leftIcons: {
    width: 90,
  },
  flexRowCenterSpaceBetween: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    margin: 6,
  },
  icon: {
    height: 22,
    width: 22,
  },
  imageCollage: {
    height: 16,
    width: 16,
    borderRadius: 50,
  },
  image2: {
    height: 16,
    width: 16,
    borderRadius: 50,
    position: "relative",
    left: -5,
    zIndex: -1,
  },
  image3: {
    height: 16,
    width: 16,
    borderRadius: 50,
    position: "relative",
    left: -10,
    zIndex: -2,
  },
  image: {
    flex: 1,
    resizeMode: "stretch",
    width: windowWidth,
  },
  lowercase: {
    textTransform: "lowercase",
  },
});
