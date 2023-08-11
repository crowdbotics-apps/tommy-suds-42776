import { useSelector } from "react-redux";
import React from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const SignIn = () => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  return <View style={styles.container}>
      <View style={styles.signinContainer}>
        <Text style={styles.signinText}>Sign in</Text>
      </View>
      <View>
        <View style={styles.textBox}>
          <Text style={styles.welcomeText}>{"Tommy Suds"}</Text>
          <Text style={styles.text}>{"Enjoy Life and Leave Your Laundry To Us"}</Text>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.mb35}>
            <Button onPress={pressed} height={50} data={Signups}>
              Sign Up
            </Button>
          </View>
          <Button onPress={pressed} height={50} borderWidth={1} backgroundColor="#FFF" color="#000">
            Log In
          </Button>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  mb35: {
    marginBottom: 35
  },
  footerContainer: {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center"
  },
  text: {
    fontSize: 12,
    color: "#000000",
    textAlign: "center",
    paddingHorizontal: "20%"
  },
  welcomeText: {
    fontSize: 31,
    color: "#2F2F2F",
    marginBottom: 16,
    fontWeight: "700"
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: 40
  },
  signinText: {
    fontSize: 42,
    fontWeight: "500"
  },
  signinContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 20,
    height: "100%"
  }
});
export default SignIn;

const Button = props => {
  const {
    entities: Signups
  } = useSelector(state => state.Signups);
  return <TouchableHighlight onPress={props.onPress} underlayColor="#DDDDDD" data={Signups}>
      <View style={[btnStyles.button, {
      backgroundColor: props.backgroundColor ? props.backgroundColor : "#000000",
      height: props.height ? props.height : 49,
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: props.borderColor ? props.borderColor : "#000000"
    }]}>
        <Text style={[btnStyles.text, {
        color: props.color ? props.color : "#ffffff"
      }]}>
          {props.children}
        </Text>
      </View>
    </TouchableHighlight>;
};

const btnStyles = StyleSheet.create({
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#3376ad",
    backgroundColor: "#3376ad"
  },
  text: {
    fontWeight: "bold",
    fontSize: 15
  }
});