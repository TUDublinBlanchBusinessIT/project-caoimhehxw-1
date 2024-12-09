import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OpeningScreen from './screens/OpeningScreen';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import RecipeGeneratorScreen from './screens/RecipeGeneratorScreen'; 
import RecipeDetailScreen from './screens/RecipeDetailScreen';


const Stack = createStackNavigator();

const App = () => {
  console.log('App.js message');
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OpeningScreen">
        <Stack.Screen name="OpeningScreen" component={OpeningScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="RecipeGeneratorScreen" component={RecipeGeneratorScreen} />
        <Stack.Screen name="RecipeDetailScreen" component={RecipeDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;













