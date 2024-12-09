import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

const RecipeGeneratorScreen = ({ navigation }) => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  // Predefined list of recipes
  const allRecipes = [
    { name: 'Pasta Salad', ingredients: ['pasta', 'tomato', 'olive oil'], guide: 'Boil pasta, mix with diced tomatoes and olive oil.' },
    { name: 'Tomato Soup', ingredients: ['tomato', 'garlic', 'onion'], guide: 'Simmer tomatoes, garlic, and onion in a pot for 20 minutes.' },
    { name: 'Fruit Salad', ingredients: ['apple', 'banana', 'orange'], guide: 'Chop fruits and mix them in a bowl.' },
    { name: 'Scrambled Eggs', ingredients: ['egg', 'milk', 'butter'], guide: 'Whisk eggs with milk, cook in a pan with butter.' },
    { name: 'Grilled Cheese', ingredients: ['bread', 'cheese', 'butter'], guide: 'Butter the bread, add cheese, and grill until golden brown.' },
  ];

  const findRecipes = () => {
    if (!ingredients.trim()) {
      Alert.alert('Error', 'Please enter some ingredients.');
      return;
    }
    const userIngredients = ingredients.toLowerCase().split(',').map((item) => item.trim());
    const matchingRecipes = allRecipes.filter((recipe) =>
      recipe.ingredients.some((ingredient) => userIngredients.includes(ingredient))
    );

    if (matchingRecipes.length === 0) {
      Alert.alert('No Recipes Found', 'Try adding more or different ingredients.');
    }

    setRecipes(matchingRecipes);
  };

  const handleLogout = () => {
    // Perform logout operations if needed
    console.log('User logged out');
    navigation.navigate('OpeningScreen'); // Navigate back to the OpeningScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recipe Generator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter ingredients (e.g., tomato, egg)"
        placeholderTextColor="#666"
        value={ingredients}
        onChangeText={setIngredients}
      />

      <TouchableOpacity style={styles.button} onPress={findRecipes}>
        <Text style={styles.buttonText}>Find Recipes</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle}>Recipes:</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recipeItem}
            onPress={() => navigation.navigate('RecipeDetailScreen', { recipe: item })}
          >
            <Text style={styles.recipeName}>{item.name}</Text>
            <Text style={styles.recipeIngredients}>
              Ingredients: {item.ingredients.join(', ')}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text style={styles.noRecipes}>No matching recipes found.</Text>}
      />

      {/* Log Out Button */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
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
    marginTop: 10,
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
  logoutButton: {
    backgroundColor: '#f44336', // Red color for logout
  },
});

export default RecipeGeneratorScreen;
