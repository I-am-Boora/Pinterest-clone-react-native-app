
import React from "react";
import Pins from '../PinData/Pins';
import PinList from '../component/PinList'

export default function PinScreen() {
  return <><PinList pins={Pins}/></>
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor:'white',
//     // flex: 1,
//     // alignItems: "center",
//     // justifyContent: "center",
//     padding: 10,
//     flexDirection: "row",
//   },
//   column: {
//     flex: 1,
//   },
// });
