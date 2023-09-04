import { useState } from 'react';

export const useGetRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (ingredients) => {
    try {
      const apiKey = '7aed44cef9d648da9a486c70f59a800c';
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${ingredients}`
      );
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return { recipes, fetchRecipes };
};
