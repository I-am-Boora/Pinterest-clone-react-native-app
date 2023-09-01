import { View, Text ,Image} from 'react-native'
import React from 'react'

const updateItem = ({id1,id2,id3}) => {
  return (
    
       <View style={{flex:1,flexDirection:'row',marginHorizontal:10,columnGap:3,}}>
      <Image source={{uri:`https://picsum.photos/200/300?random=${id1}`}} style={{width:150,height:300,flex:1}} resizeMode='contain'/>
      <Image source={{uri:`https://picsum.photos/200/300?random=${id2}`}} style={{width:150,height:300,flex:1}} resizeMode='contain'/>
      <Image source={{uri:`https://picsum.photos/200/300?random=${id3}`}} style={{width:150,height:300,flex:1}} resizeMode='contain'/>
      
   
    </View>
  )
}

export default updateItem