import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpeningScreen from './screens/OpeningScreen'; // Ensure this path is correct
import SignUpScreen from './screens/SignUpScreen'; // Ensure this path is correct
import LogInScreen from './screens/LogInScreen'; // Import the LoginScreen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningScreen">
        {/* Opening Screen */}
        <Stack.Screen
          name="OpeningScreen"
          component={OpeningScreen}
          options={{ title: 'Welcome' }} // Optional header title
        />

        {/* LogIn Screen */}
        <Stack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ title: 'Log In' }} // Optional header title
        />

        {/* Sign-Up Screen */}
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }} // Optional header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;












