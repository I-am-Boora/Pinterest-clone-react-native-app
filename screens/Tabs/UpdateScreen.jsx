import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

import UpdateItem from '../../component/UpdateItem'
import { ScrollView } from 'react-native-gesture-handler'
const UpdateScreen = () => {

  return (
    <ScrollView>
    <View style={{flex:1,backgroundColor:'white'}}>
      <Text style={{fontSize:18,paddingLeft:10,marginBottom:0}}>Your home feed has new Pins</Text>
     <UpdateItem id1={77} id2={17} id3={18}/>
     <Text style={{fontSize:18,paddingLeft:10,marginBottom:0}}>Pins inpspire by you</Text>
     <UpdateItem id1={22} id2={23} id3={24}/>
      <Text style={{fontSize:18,paddingLeft:10,marginBottom:0}}>Random Pins might you like</Text>
      <UpdateItem id1={25} id2={26} id3={30}/>
      </View>
      </ScrollView>
    
  )
}

export default UpdateScreen

const styles = StyleSheet.create({})