import { useRecipes } from '../context/RecipeContext';
function MealPlannerPage() {
  const { favorites, mealPlan, addMeal, removeMeal } = useRecipes();
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];

  return (
    <div className="meal-planner-page">
      <h2>My Weekly Meal Planner</h2>
      <p>Choose recipes from your favorites to plan your meals!</p>

      <div className="meal-planner">
        {days.map((day) => (
          <div key={day} className="recipe-card">
            <h3>{day}</h3>

            {mealPlan[day] ? (
              <>
                <p>{mealPlan[day].strMeal}</p>

                <button onClick={() => removeMeal(day)}>
                  Remove Meal
                </button>
              </>
            ) : (
              <select
                defaultValue=""
                onChange={(e) => {
                  const recipe = favorites.find(
                    (item) => item.idMeal === e.target.value
                  );

                  if (recipe) {
                    addMeal(day, recipe);
                  }
                }}
              >
                <option value="">Choose a recipe</option>

                {favorites.map((recipe) => (
                  <option key={recipe.idMeal} value={recipe.idMeal}>
                    {recipe.strMeal}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealPlannerPage;