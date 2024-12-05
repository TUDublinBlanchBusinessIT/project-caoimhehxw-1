import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpeningScreen from './screens/OpeningScreen'; // Import your OpeningScreen
import SignUpScreen from './screens/SignUpScreen';   // Import your SignUpScreen
import LoginScreen from './screens/LoginScreen';     // Import your LoginScreen
import RecipeGeneratorScreen from './screens/RecipeGeneratorScreen'; // Import the RecipeGeneratorScreen

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
        
        {/* Sign Up Screen */}
        <Stack.Screen 
          name="SignUpScreen" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} // Optional header title
        />
        
        {/* Log In Screen */}
        <Stack.Screen 
          name="LoginScreen" 
          component={LoginScreen} 
          options={{ title: 'Log In' }} // Optional header title
        />

        {/* Recipe Generator Screen */}
        <Stack.Screen 
          name="RecipeGenerator" 
          component={RecipeGeneratorScreen} 
          options={{ title: 'Recipe Generator' }} // Optional header title
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;






