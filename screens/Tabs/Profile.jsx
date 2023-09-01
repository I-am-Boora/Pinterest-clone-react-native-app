import React from "react";
import Pins from '../../PinData/Pins';
import PinList from '../../component/PinList'
import { View,StyleSheet,Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { MaterialIcons } from '@expo/vector-icons';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.iconContainer}>
        <Ionicons name="share-social" size={24} color="black" style={{paddingRight:20}}/>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </View>
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
         <View style={styles.profileContainer}><Text style={styles.profileText}>S</Text></View>
         <Text style={styles.profileTitle}>Sonu Boora HD</Text>
         <Text style={styles.profileSubTitle}>@iamboora</Text>
          <Text style={styles.follower}>131k followers  34 following</Text>
          <Text style={styles.saved}>Saved</Text>
          <View style={styles.underline}></View>
          <View style={styles.searchContainer}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={24} color="black" style={{paddingHorizontal:5}}/>
            <TextInput placeholder="Search your Pins"/>
            </View>
            <View style={styles.icons}><MaterialIcons name="sort" size={32} color="black" style={{paddingHorizontal:5}}/>
            <MaterialIcons name="add" size={32} color="black" /></View>
          </View>
      </View>
      <PinList pins={Pins}/>
      
     </ScrollView>
    </SafeAreaView>
  )
}

export {Profile}

const styles = StyleSheet.create({
container:{
  flex:1,
  // width:'100%',
  // paddingHorizontal:10,
  backgroundColor:'white',
  // justifyContent:'center',
  // alignItems:'center'
},
iconContainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:'flex-end',
  paddingRight:10,
  paddingTop:10
},
profileContainer:{
  width:120,
  height:120,
  marginTop:50,
  backgroundColor:'#eeeeee',
  borderRadius:60,
  alignItems:'center',
  justifyContent:"center"
},
profileText:{
  fontSize:40
},
profileTitle:{
  fontSize:30,
  paddingTop:10
},
profileSubTitle:{
  fontSize:20,
  color:'grey'
},
follower:{
  fontSize:18,
  fontWeight:'600',
  paddingTop:10
},
saved:{
  fontSize:20,
  marginTop:50,
  fontWeight:'600',
  paddingBottom:5
},
underline:{
  width:50,
  height:4,
  backgroundColor:'black',
  borderRadius:10
},
searchContainer:{
  flexDirection:'row',
  marginTop:20,
  paddingHorizontal:10
},
searchBar:{
  flex:1,
  flexDirection:'row',
  backgroundColor:'#eeeeee',
  height:44,
  alignItems:'center',
  borderRadius:22,
},
icons:{
  flexDirection:'row',
  alignItems:'center',
}
})

