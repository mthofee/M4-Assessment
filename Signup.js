//import liraries
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform
} from "react-native";

// create a component
const Signup = ({ navigation }) => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

    return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First name"
          value={firstname}
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setFirstname(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Surname"
          value={surname}
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setSurname(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Physical address"
          value={address}
          autoCapitalize={"sentences"}
          placeholderTextColor="#FFF"
          onChangeText={(text) => setAddress(text)}
        />
      </View>

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
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Cornfirm Password"
          value={confirmPassword}
          autoCapitalize={"none"}
          placeholderTextColor="#FFF"
          secureTextEntry={true}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.submitBtn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCEDC8",
  },

  inputView: {
    backgroundColor: "#689F38",
    //borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
});

//make this component available to the app
export default Signup;
