import { createContext, useContext, useState } from 'react';

const RecipeContext = createContext();

export function RecipeProvider({ children }) {

  // Load saved favorites from localStorage
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Load saved meal plans from localStorage
  const [mealPlan, setMealPlan] = useState(() => {
    try {
      const saved = localStorage.getItem('mealPlan');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  function addFavorite(recipe) {
    setFavorites((prev) => {
      if (prev.some((item) => item.idMeal === recipe.idMeal)) {
        return prev;
      }

      const updated = [...prev, recipe];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  }

  function removeFavorite(id) {
    setFavorites((prev) => {
      const updated = prev.filter(
        (recipe) => recipe.idMeal !== id
      );

      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  }

  function addMeal(day, recipe) {
    setMealPlan((prev) => {
      const updated = {
        ...prev,
        [day]: recipe
      };

      localStorage.setItem('mealPlan', JSON.stringify(updated));
      return updated;
    });
  }

  function removeMeal(day) {
    setMealPlan((prev) => {
      const updated = { ...prev };
      delete updated[day];

      localStorage.setItem('mealPlan', JSON.stringify(updated));
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