import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecipeProvider } from './context/RecipeContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';
import MealPlannerPage from './pages/MealPlannerPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <RecipeProvider>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/planner" element={<MealPlannerPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;