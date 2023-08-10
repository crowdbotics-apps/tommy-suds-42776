import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: "https://tommysudslaundrycom.files.wordpress.com/2023/08/2333453.png?"
      }} style={styles.logo} />
        <Text style={styles.title}>Tommy Suds</Text>
        <Text style={styles.tagline}>Enjoy Life and Leave Your Laundry To Us</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  tagline: {
    fontSize: 16,
    color: '#888'
  }
});
export default SplashScreen;