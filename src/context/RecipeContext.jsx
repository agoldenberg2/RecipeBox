import { createContext, useContext, useState } from 'react';
const RecipeContext = createContext();
export function RecipeProvider({ children }) {
const [favorites, setFavorites] = useState([]);
const [mealPlan, setMealPlan] = useState({});
  function addFavorite(recipe) {
    setFavorites((prev) => {
      if (prev.some((item) => item.idMeal === recipe.idMeal)) {
        return prev;
      }

      return [...prev, recipe];
    });
  }

  function removeFavorite(id) {
    setFavorites((prev) =>
      prev.filter((recipe) => recipe.idMeal !== id)
    );
  }

function addMeal(day, recipe) {
  setMealPlan((prev) => ({
    ...prev,
    [day]: recipe
  }));
}

function removeMeal(day) {
  setMealPlan((prev) => {
    const updated = { ...prev };
    delete updated[day];
    return updated;
  });
}

  return (
    <RecipeContext.Provider
      value={{
  favorites,
  addFavorite,
  removeFavorite,
  mealPlan,
  addMeal,
  removeMeal
}}
    >
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}