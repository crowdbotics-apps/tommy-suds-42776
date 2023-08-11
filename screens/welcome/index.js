import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.pWAHyyMU}>
        <View style={styles.group} />
        
        
      <ImageBackground style={styles.RXpGIpCx} source={{
        uri: "https://tommysudslaundrycom.files.wordpress.com/2023/08/111marshall-williams-pypzioj-kks-unsplash-1.jpg"
      }} resizeMode="stretch"><Text style={styles.MzcfeMWO}>{"Tommy Suds"}</Text><ImageBackground style={styles.BCEnEKHt} source={{
          uri: "https://tommysudslaundrycom.files.wordpress.com/2023/08/2333453.png"
        }} resizeMode="contain"></ImageBackground><Text style={styles.LlOGUewM}>{"Enjoy Life and Leave Your Laundry To Us"}</Text></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d9ecff",
    height: "100%"
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  group: {
    alignItems: "center",
    width: 309,
    height: 89
  },
  pWAHyyMU: {
    position: "relative"
  },
  RXpGIpCx: {
    width: 400,
    height: 664,
    position: "absolute",
    top: -25,
    left: -22
  },
  MzcfeMWO: {
    width: 275,
    height: 51,
    lineHeight: 14,
    fontSize: 35,
    borderRadius: 0,
    flexDirection: "row",
    flex: 1,
    color: "#FFF",
    position: "absolute",
    top: 307,
    left: 84,
    alignItems: "center",
    textAlign: "left",
    fontWeight: "700"
  },
  BCEnEKHt: {
    position: "absolute",
    top: 166,
    left: 135.5,
    width: 129,
    height: 97
  },
  LlOGUewM: {
    width: 238,
    height: 63,
    lineHeight: 25,
    fontSize: 20,
    borderRadius: 0,
    position: "absolute",
    left: 83,
    top: 356,
    color: "#ffffff",
    fontWeight: "500"
  }
});
export default WelcomeScreen;