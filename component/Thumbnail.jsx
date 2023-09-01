import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

const Thumbnail = (props) => {
  const { thumbnailImage, thumbnailTitle } = props.data;
  return (
    <ScrollView>
      <View
        style={{
          // paddingRight: 2,
          width: 180,
          height: 100,
          borderRadius: 18,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          alignSelf:'center',
          elevation: 3,
        }}
      >
        <ImageBackground
          source={{
            uri: thumbnailImage,
          }}
          style={{ width: 180, height: 100, borderRadius: 30, opacity: 0.9 }}
          resizeMode="cover"
          borderRadius={18}
        />
        <Text
          style={{
            zIndex: 10,
            color: "white",
            position: "absolute",
            fontSize: 20,
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          {thumbnailTitle}
        </Text>
      </View>
    </ScrollView>
  );
};

export default Thumbnail;
