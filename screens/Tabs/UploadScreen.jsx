import { StyleSheet, Text, View, Modal, Dimensions, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const UploadScreen = () => {
  const [visible, setVisible] = useState(true);
  return (
    <TouchableOpacity style={{flex:1,backgroundColor:'orange'}} onPress={()=>{setVisible(true)}}>
      {/* <Modal visible={visible} transparent>
        <TouchableOpacity style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'rgba(0,0,0,0.5)'}}>
          <View style={{width:100,height:100,backgroundColor:'red'}}></View>
        </TouchableOpacity>
      </Modal> */}
    </TouchableOpacity>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({});
