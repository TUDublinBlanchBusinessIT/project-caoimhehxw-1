import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import firebaseApp from "../firebase"; // Import initialized Firebase app

const db = getFirestore(firebaseApp); // Initialize Firestore

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Function to handle sign-up
  const handleSignUp = async () => {
    try {
      // Input validation
      if (!username || !email || !password || !confirmPassword) {
        Alert.alert('Error', 'Please fill all the fields.');
        return;
      }

      if (password !== confirmPassword) {
        console.log('Passwords do not match');
        Alert.alert('Error', 'Passwords do not match.');
        return;
      }

      // Check if the username already exists in Firestore
      const userQuery = query(collection(db, 'Users'), where('User Name', '==', username));
      const querySnapshot = await getDocs(userQuery);

      if (!querySnapshot.empty) {
        Alert.alert('Error', 'Username already exists. Please choose another one.');
        return;
      }

      // Add the new user document
      await addDoc(collection(db, 'Users'), {
        'User Name': username,
        Email: email,
        Password: password, // Always hash passwords in production!
      });

      // Success alert
      Alert.alert('Success', 'Account created successfully!');
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigation.navigate('LogInScreen');
    } catch (error) {
      console.error('Error signing up:', error);
      Alert.alert('Error', 'Failed to create an account. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Quick Chef</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#666"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#666"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Create password"
        placeholderTextColor="#666"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor="#666"
        secureTextEntry={true}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Create Account Button */}
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create account</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    width: '80%',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
