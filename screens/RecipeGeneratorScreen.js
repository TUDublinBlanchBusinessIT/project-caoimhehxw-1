import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const RecipeGeneratorScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Predefined recipe list
  const allRecipes = [
    { name: 'Pasta Salad', ingredients: ['pasta', 'tomato', 'olive oil'] },
    { name: 'Tomato Soup', ingredients: ['tomato', 'garlic', 'onion'] },
    { name: 'Fruit Salad', ingredients: ['apple', 'banana', 'orange'] },
    { name: 'Scrambled Eggs', ingredients: ['egg', 'milk', 'butter'] },
  ];

  const findRecipes = () => {
    const userIngredients = ingredients.toLowerCase().split(',').map((item) => item.trim());
    const matchingRecipes = allRecipes.filter((recipe) =>
      recipe.ingredients.every((ingredient) => userIngredients.includes(ingredient))
    );

    setRecipes(matchingRecipes);
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Recipe Generator</Text>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter ingredients (e.g., tomato, egg)"
        placeholderTextColor="#666"
        value={ingredients}
        onChangeText={setIngredients}
      />

      {/* Search Button */}
      <TouchableOpacity style={styles.button} onPress={findRecipes}>
        <Text style={styles.buttonText}>Find Recipes</Text>
      </TouchableOpacity>

      {/* Recipes Output */}
      <Text style={styles.subtitle}>Recipes:</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.recipeItem}>
            <Text style={styles.recipeName}>{item.name}</Text>
            <Text style={styles.recipeIngredients}>
              Ingredients: {item.ingredients.join(', ')}
            </Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.noRecipes}>No matching recipes found.</Text>}
      />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  recipeItem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeIngredients: {
    fontSize: 14,
    color: '#555',
  },
  noRecipes: {
    marginTop: 20,
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default RecipeGeneratorScreen;
