import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to RecipeBox!</h2>

      <p>
        Find new recipes, save your favorites, and plan
        your meals all in one place!
      </p>

      <Link to="/search">
        <button>Find Recipes</button>
      </Link>
    </div>
  );
}

export default HomePage;