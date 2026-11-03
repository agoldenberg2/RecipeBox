import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import HomePage from './HomePage';

describe('HomePage', () => {
  it('displays the welcome message', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Welcome to RecipeBox!')
    ).toBeInTheDocument();
  });

  it('displays the Find Recipes button', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('button', { name: 'Find Recipes' })
    ).toBeInTheDocument();
  });
});