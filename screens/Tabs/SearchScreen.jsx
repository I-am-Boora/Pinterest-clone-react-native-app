import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Thumbnail from "../../component/Thumbnail";
import {data} from '../../PinData/thumbnailData'

const SearchScreen = () => {
  const imageData = [
    {
      id: "0",
      image:
        "https://images.pexels.com/photos/13374672/pexels-photo-13374672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Nature",
    },
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Food",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Car",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Girl",
    },
  ];
  // const {thumnailTitle,thumbnailImage} =thumbnailData[0]
  // const {thumbnailTitle,thumbnailImage} = data
  // const calculateTopHeight = SafeAreaInsetsContext;


  return (
    <SafeAreaView>
      <ScrollView>
     
      <View style={styles.searchBar}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="search" size={24} color="grey" />
          <TextInput
            placeholder="Search for ideas"
            style={{ flex: 1, padding: 5, fontSize: 15, color: "grey" }}
          />
          <Ionicons name="camera" size={24} color="grey" />
        </View>
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginBottom: 20,
          marginTop:20,
          fontWeight:'600',
          color: "grey",
        }}
      >
        Ideas for you
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
         
          paddingHorizontal: 5,
        }}
      >
        <Thumbnail data ={data[5]}/>
        <Thumbnail data = {data[4]}/>
        
      </View>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginVertical: 20,
          fontWeight:'600',
          color: "grey",
      
        }}
      >
        Popular on Pinterest
      </Text>
       <View
        style={{
          flexDirection: "row",
            flexWrap: 'wrap',
            alignItems: 'center',
            width: '100%',
          flex:1,
            rowGap: 10,
          // columnGap:4,
          // width:"100%",
    
          justifyContent: "center",
          paddingHorizontal: 5,
        }}
      >
        {data.map((item,index)=>{
          return(
            <Thumbnail data={item} key={item.id} />
          )
        })}
      </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  searchBar: {
    width: "95%",
    paddingHorizontal: 10,
    marginTop:48,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    elevation:8
    // position: "absolute",
    // top: 37,
  },
});
