import { useState } from 'react';
import RecipeCard from '../components/RecipeCard';
function SearchPage() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function searchRecipes() {
    if (!search.trim()) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(search)}`
      );

      if (!response.ok) {
        throw new Error('Could not load recipes');
      }

      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="search-page">
      <h2>Search Recipes</h2>

      <input
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchRecipes}>Search</button>

      {loading && <p>Loading recipes...</p>}
      {error && <p>{error}</p>}

      <div className="recipes-container">
  {recipes.map((recipe) => (
    <RecipeCard
      key={recipe.idMeal}
      recipe={recipe}
    />
  ))}
</div>
    </div>
  );
}

export default SearchPage;