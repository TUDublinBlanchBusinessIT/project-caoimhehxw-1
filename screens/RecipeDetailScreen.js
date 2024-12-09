import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { recipe } = route.params; // Get the recipe details passed via navigation

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{recipe.name}</Text>
      <Text style={styles.subtitle}>Ingredients:</Text>
      <Text style={styles.ingredients}>{recipe.ingredients.join(', ')}</Text>
      <Text style={styles.subtitle}>Guide:</Text>
      <Text style={styles.guide}>{recipe.guide}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 16,
    marginBottom: 10,
  },
  guide: {
    fontSize: 16,
  },
});

export default RecipeDetailScreen;
