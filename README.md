 # ***Quick Chef***
Quick Chef is a user-friendly recipe generator app that helps users find recipes based on the ingredients they have at home. Designed to simplify meal preparation, Quick Chef combines ease of use with a clean and aesthetic interface, providing tailored recipe suggestions and detailed cooking guides.

## **Features**

### **User Authentication:**
Sign Up: Users can create accounts by entering their username, email, and password.
Log In: Returning users can log in to access the recipe generator.
Log Out: Users can securely log out of their account.

### **Recipe Generator:**
Users can input ingredients they already have, and the app will suggest matching recipes.
Recipes include the required ingredients and a step-by-step guide.

### **Recipe Detail View:**
Clicking on a recipe displays a detailed guide, including ingredients and preparation steps.
Clean and aesthetically pleasing layout for easy reading.

### **Recipe Filters (Optional):**
Users can filter recipes based on preparation time, difficulty level, or cuisine type.

### **Responsive Design:**
Optimized for mobile devices with intuitive navigation and consistent styling.

## **App Structure**

### **Opening Screen:**
Welcome screen with options to sign up or log in.
Aesthetic green background with easy-to-use buttons.

### **Sign Up Screen:**
Form to create a new account with fields for username, email, and password.

### **Log In Screen:**
Allows users to log in with their credentials.
Includes error handling for incorrect input.

### **Recipe Generator Screen:**
Users input ingredients they have at home.
Displays a list of recipes with matching ingredients.
Includes a "Log Out" button for secure exit.

### **Recipe Detail Screen:**
Detailed view of a selected recipe.
Includes a list of ingredients and step-by-step cooking instructions.

### **Optional Recipe Filter Screen:**
Dropdowns and sliders for filtering recipes based on user preferences.

### **Technologies Used**

### **Frontend: React Native**
Navigation: React Navigation for screen transitions.
UI Components: React Native components and custom styles.

### **Backend: Firebase Firestore**
User Authentication: Secure sign-up and log-in functionality.
Recipe Data: Cloud Firestore stores recipe data and user inputs.

### **Styling:** Custom CSS-in-JS styles in React Native
A consistent and clean design with aesthetic color schemes.
