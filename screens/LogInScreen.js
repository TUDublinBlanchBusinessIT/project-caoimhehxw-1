import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebaseApp from "../firebase"; // Import initialized Firebase app

const db = getFirestore(firebaseApp); // Use the initialized app to get Firestore instance

const LogInScreen = () => {
    
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Quick Chef</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry={true}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.button} onPress={fetchUserData}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  forgotPassword: {
    color: '#007BFF',
    fontSize: 14,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#000',
    width: '80%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LogInScreen;


