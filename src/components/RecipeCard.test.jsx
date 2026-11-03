import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { RecipeProvider } from '../context/RecipeContext';
import RecipeCard from './RecipeCard';

const recipe = {
  idMeal: '123',
  strMeal: 'Chicken Pasta',
  strCategory: 'Pasta',
  strMealThumb: 'https://example.com/chicken.jpg'
};

describe('RecipeCard', () => {
  it('displays the recipe name', () => {
    render(
      <RecipeProvider>
        <RecipeCard recipe={recipe} />
      </RecipeProvider>
    );

    expect(
      screen.getByText('Chicken Pasta')
    ).toBeInTheDocument();
  });

  it('allows users to save and remove favorites', () => {
    render(
      <RecipeProvider>
        <RecipeCard recipe={recipe} />
      </RecipeProvider>
    );

    const saveButton = screen.getByRole('button', {
      name: /Save to Favorites/i
    });

    fireEvent.click(saveButton);

    expect(
      screen.getByRole('button', { name: /Remove Favorite/i })
    ).toBeInTheDocument();

    fireEvent.click(
      screen.getByRole('button', { name: /Remove Favorite/i })
    );

    expect(
      screen.getByRole('button', { name: /Save to Favorites/i })
    ).toBeInTheDocument();
  });
});