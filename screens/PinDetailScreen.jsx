import { StyleSheet, Image, Pressable } from "react-native";
import { Text, View } from "react-native";
import {
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import React,{ useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import Pins from "../PinData/Pins";
import PinList from '../component/PinList'
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Profile } from "./Tabs/Profile";

export default function PinDetailScreen({id}) {
  const [clicked, setClicked] = useState(false);
  const [like, setLike] = useState(false);
  const [ration, setRation] = useState(1);
  
  const navigation = useNavigation()
  const route = useRoute()
  const pinId = route.params?.id
  const pin = Pins.find((p)=>p.id===pinId)
  const{image} = pin
   useEffect(() => {
    if (image)
      Image.getSize(image, (width, height) =>
        setRation(width / height)
      );
  }, [image]);
  const gotoback =()=>{
    navigation.goBack()
  }

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image
            source={{
              uri: pin?.image,
            }}
            style={[styles.image,{aspectRatio:ration}]}
          />
          <View style={{flex:1,flexDirection:'row',backgroundColor:'red'}}>
              <View style={{
                flex:1,
                 position:'absolute',top:30}}>
                <Ionicons name="chevron-back-outline" size={24} color={"white"} /></View>
              <View style={{
                backgroundColor:'blue'
                }}>
                 <Entypo name="dots-three-horizontal" size={24} color="white" style={{position:'absolute',top:30}} />
              </View>
             
            
            </View>
          

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=800",
                }}
                style={styles.profileImage}
                resizeMode="cover"
              />
              <View style={{ width: "60%", paddingVertical: 5 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text
                    style={{ fontSize: 20, marginRight: 5, fontWeight: "600" }}
                  >
                    {pin.user}
                  </Text>
                  <MaterialIcons name="verified" size={18} color="#2196f3" />
                </View>

                <Text>21k followers</Text>
              </View>
            </View>

            <View style={{ position: "absolute", right: 0 }}>
              <TouchableOpacity
                onPress={() => setClicked(!clicked)}
                activeOpacity={0.8}
              >
                <View
                  style={{
                    borderRadius: 30,

                    backgroundColor: clicked ? "black" : "#f2f2f2",
                    paddingHorizontal: 15,
                    paddingVertical: 10,

                    margin: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: clicked ? "white" : "black",
                    }}
                  >
                    {clicked ? "Following" : "Follow"}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>{pin.title}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 10,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <TouchableOpacity activeOpacity={0.8}>
              <View
                style={{
                  borderRadius: 30,
                  backgroundColor: "#f2f2f2",
                  paddingHorizontal: 15,
                  paddingVertical: 10,

                  margin: 5,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>View</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.navigate('Profile',id={pinId})}>
              <View
                style={{
                  borderRadius: 30,
                  backgroundColor: "red",
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  margin: 5,
                }}
              >
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "600" }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            marginTop: 3,
            borderRadius: 25,
            backgroundColor:'white'
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              No comments yet
            </Text>
            <Pressable onPress={() => setLike(!like)}>
              {like ? (
                <AntDesign name="heart" size={24} color="red" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              )}
            </Pressable>
          </View>
          <Text
            style={{ fontSize: 16, textAlign: "center", marginVertical: 20 }}
          >
            Love this Pin? Let Sonu know this !
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: 10,
              borderBottomLeftRadius: 25,
              borderBottomRightRadius: 25,
            }}
          >
            <View
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: 25,
                margin: 10,
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#bdbdbd",
              }}
            >
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "600",
                }}
              >
                S
              </Text>
            </View>
            <TextInput
              placeholder="add a comment"
              style={{
                borderWidth: 1,
                flex: 1,
                marginRight: 10,
                height: 48,
                borderRadius: 24,
                paddingLeft: 10,
                borderColor: "#9e9e9e",
              }}
            />
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 3, borderRadius: 25 ,backgroundColor:'white'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "600",
              textAlign: "center",
              marginVertical: 20,
            }}
          >
            More like this
          </Text>
         
          
        </View>
         {/* <View style={{width:'100%',height:500,backgroundColor:'blue'}}><PinList pin={Pins}/></View> */}
        <PinList pins={Pins}/>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
    width:'100%',
    backgroundColor: "black",
  },
  subContainer: {
    borderRadius: 25,
    backgroundColor:'white',
    width:'100%'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 30,
    margin: 5,
  },
  profileTitle: {},
});
