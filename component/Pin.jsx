import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

const Pin = ({pin}) => {
  const { image, title ,id} =pin;
  const [ration, setRation] = useState(1);
  const navigation = useNavigation()
  useEffect(() => {
    if (image)
      Image.getSize(image, (width, height) =>
        setRation(width / height)
      );
  }, [image]);
  const gotoPinDetail =()=>{
    navigation.navigate('PinDetailScreen',{id})
  }
  const onLike = () => {};
  return (
    <Pressable onPress={gotoPinDetail}>
    <View style={styles.pin}>
      <View>
        <Image
          source={{ uri: image }}
          style={[styles.image, { aspectRatio: ration }]}
          resizeMode="contain"
        />
        {/* <Pressable onPress={onLike}>
          <AntDesign
            name="hearto"
            size={16}
            color="black"
            style={styles.heartBtn}
          />
        </Pressable> */}
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "100%",
          // alignItems: "space-between",
        }}
      >
        <View style={{ width: "85%" }}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
        </View>
        <View style={{ width: "15%" }}>
          <Pressable>
            <Feather name="more-horizontal" size={20} color="#181818" />
          </Pressable>
        </View>
      </View>
    </View>
    </Pressable>
  );
};

export default Pin;

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontWeight: "600",
    color: "#181818",
    lineHeight: 22,
    flex: 1,
  },
  pin: {
    width: "100%",
    padding: 5,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 25,
  },
  heartBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#f5f5f5",
    padding: 3,
    borderRadius: 20,
  },
});
