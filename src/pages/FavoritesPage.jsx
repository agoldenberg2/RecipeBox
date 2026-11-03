import { useRecipes } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

function FavoritesPage() {
  const { favorites } = useRecipes();

  return (
    <div className="favorites-page">
      <h2>My Favorite Recipes ❤️</h2>

      {favorites.length === 0 ? (
        <p>You haven't saved any recipes yet!</p>
      ) : (
        <div className="recipes-container">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.idMeal}
              recipe={recipe}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;