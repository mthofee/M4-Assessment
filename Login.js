import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./assets/nature-logo.png")}
      />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          value={email}
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setEmail(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          value={password}
          placeholderTextColor="#FFF"
          autoCapitalize={"none"}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("Password reset")}>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signupBtn}
        onPress={() => navigation.navigate("Signup")}
      >
        <Text style={styles.loginText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 0,
    height: 250,
    width: 250,
  },

  inputView: {
    backgroundColor: "#689F38",
   // borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#689F38",
  },

  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#689F38",
  },
});