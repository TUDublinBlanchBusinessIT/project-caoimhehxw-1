import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OpeningScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/logo.png')} // Ensure this is the correct path to your logo
        style={styles.logoImage}
        resizeMode="contain"
      />

      {/* App Name */}
      <Text style={styles.logoText}>Quick Chef</Text>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LogInScreen')}>
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
    backgroundColor: '#f0f8e0', // Light green background
  },
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 20, // Adds spacing below the logo
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000', // Black color for "Quick Chef"
    marginBottom: 40, // Adds spacing below the text
  },
  button: {
    backgroundColor: '#4CAF50', // Green background for buttons
    padding: 15,
    width: '80%',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff', // White text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OpeningScreen;
