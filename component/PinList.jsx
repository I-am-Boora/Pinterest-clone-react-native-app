import React from "react";
import { StyleSheet, Image ,Text,View} from "react-native";
import Pin from "../component/Pin";
import { ScrollView } from "react-native-gesture-handler";

export default function PinList({pins}) {
//   const { title, image } = Pins[0];

  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.column}>
          {pins?.filter((_, index) => index % 2 === 0).map((pin) => (
            <Pin pin={pin} key={pin.id} />
          ))}
        </View>
        <View style={styles.column}>
          {pins?.filter((_, index) => index % 2 === 1).map((pin) => (
            <Pin pin={pin} key={pin.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    padding: 10,
    borderRadius: 25,
    marginTop:3,
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
});
