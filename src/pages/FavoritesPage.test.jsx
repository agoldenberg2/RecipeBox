import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RecipeProvider } from '../context/RecipeContext';
import FavoritesPage from './FavoritesPage';

describe('FavoritesPage', () => {
  it('displays the Favorites heading', () => {
    render(
      <RecipeProvider>
        <FavoritesPage />
      </RecipeProvider>
    );

    expect(
      screen.getByText('My Favorite Recipes ❤️')
    ).toBeInTheDocument();
  });

  it('shows a message when no recipes are saved', () => {
    render(
      <RecipeProvider>
        <FavoritesPage />
      </RecipeProvider>
    );

    expect(
      screen.getByText("You haven't saved any recipes yet!")
    ).toBeInTheDocument();
  });
});