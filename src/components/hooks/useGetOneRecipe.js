import { useState } from 'react';

export const useGetOneRecipe = (id) => {
  const [recipe, setRecipe] = useState([]);

  const fetchOneRecipe = async () => {
    try {
      const apiKey = '7aed44cef9d648da9a486c70f59a800c';
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
      );
      const data = await response.json();
      setRecipe(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return { recipe, fetchOneRecipe };
};
