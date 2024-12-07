import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import firebaseApp from '../firebase'; // Import initialized Firebase app

const db = getFirestore(firebaseApp); // Initialize Firestore

const LogInScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      console.log('Handle login');
      // Input validation
      if (!username || !password) {
        Alert.alert('Error', 'Please fill in all fields.');
        console.log('5 Handle login');
        return;
      }

      // Query Firestore for the username
      const userQuery = query(collection(db, 'Users'), where('User Name', '==', username));
      const querySnapshot = await getDocs(userQuery);

      if (querySnapshot.empty) {
        Alert.alert('Error', 'Username not found.');
        console.log('4 Handle login');
        return;
      }

      // Validate password
      let validLogin = false;
      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.Password === password) {
          validLogin = true;
        }
      });

      if (validLogin) {
        Alert.alert('Success', 'Login successful!');
        console.log('2 Handle login');
        navigation.navigate('RecipeGeneratorScreen'); // Navigate to HomeScreen or the next screen
      } else {
        Alert.alert('Error', 'Invalid password. Please try again.');
        console.log('3 Handle login');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      Alert.alert('Error', 'An error occurred during login. Please try again.');
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
        placeholder="Password"
        placeholderTextColor="#666"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
