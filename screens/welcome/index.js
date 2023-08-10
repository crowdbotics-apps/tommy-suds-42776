import { ImageBackground } from "react-native";
import React from "react";
import { View, ScrollView, SafeAreaView, StyleSheet } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} style={styles.pWAHyyMU}>
        <View style={styles.group} />
        
        
      <ImageBackground style={styles.RXpGIpCx} source={{
        uri: "https://tommysudslaundrycom.files.wordpress.com/2023/08/111marshall-williams-pypzioj-kks-unsplash-1.jpg"
      }} resizeMode="stretch"></ImageBackground></ScrollView>
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
  }
});
export default WelcomeScreen;