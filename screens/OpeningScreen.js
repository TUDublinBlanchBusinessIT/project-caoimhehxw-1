import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const OpeningScreen = ({ navigation }) => {
  console.log('Opening Screen message');
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image
        source={require('../assets/logo.png')} // Adjust the path if needed
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Title */}
      <Text style={styles.title}>Quick Chef</Text>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUpScreen')} // Navigate to SignUpScreen
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Log In Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LogInScreen')} // Navigate to LogInScreen
      >
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
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OpeningScreen;






