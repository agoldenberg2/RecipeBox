import { useRecipes } from '../context/RecipeContext';

function RecipeCard({ recipe }) {
  const { favorites, addFavorite, removeFavorite } = useRecipes();

  const isFavorite = favorites.some(
    (item) => item.idMeal === recipe.idMeal
  );

  return (
    <div className="recipe-card">
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
      />

      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.idMeal)}>
          Remove Favorite
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe)}>
          Save to Favorites ❤️
        </button>
      )}
    </div>
  );
}

export default RecipeCard;