# RecipeBox

RecipeBox is a React application that helps users find new recipes,
save their favorites, and plan meals throughout the week.

I created this project to make finding recipes and organizing meals
easier without having to search through multiple websites.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- React Context API
- TheMealDB API
- CSS
- Vitest
- React Testing Library

## Installation

- Search for recipes by name
- View recipe pictures and categories
- Save and remove favorite recipes
- Plan meals for each day of the week
- Navigate between different pages
- Responsive design for mobile and desktop

## Routes

- Home: Introduction to RecipeBox
- Search Recipes: Search for meals using TheMealDB API
- Favorites: View saved recipes
- Meal Planner: Organize meals for the week
- 404 Page: Displays when a page doesn't exist

## API

RecipeBox uses TheMealDB API to search for recipes
and display meal information.

# URL

API Website: https://www.themealdb.com/api.php

1. Clone this GitHub repository.
2. Open the project folder in VS Code.
3. Install dependencies:

   npm install

4. Start the application:

   npm run dev

5. Open the local address displayed in the terminal.

## Testing

RecipeBox uses Vitest and React Testing Library.

To run the tests:

npm run test -- --run

## Deployment

RecipeBox will be deployed using Vercel.

Website https://recipebox-ten.vercel.app/

## Known Limitations

- Favorites and meal plans reset when the page refreshes.
- User authentication has not been added yet.
- Recipe details and cooking instructions are not displayed yet.

## Future Improvements

For my final project, I plan to add user authentication,
save user data between sessions, and improve the recipe
searching and meal planning features.
