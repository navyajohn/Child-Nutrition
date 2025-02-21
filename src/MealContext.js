// MealContext.js
import React, { createContext, useState } from 'react';

export const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState({
    Monday: { breakfast: 'Milk and Biscuit', lunch: 'Dal Chawal' },
    Tuesday: { breakfast: 'Aloo Parantha', lunch: 'Khichdi' },
    Wednesday: { breakfast: 'Milk and Banana', lunch: 'Kadhi Chawal' },
    Thursday: { breakfast: 'Gobi Parantha ', lunch: 'Paneer Roti' },
    Friday: { breakfast: 'Milk and Toast', lunch: 'Bhindi Roti' },
  });

  const updateMeal = (day, mealType, newMeal) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [day]: {
        ...prevMeals[day],
        [mealType]: newMeal,
      },
    }));
  };

  return (
    <MealContext.Provider value={{ meals, updateMeal }}>
      {children}
    </MealContext.Provider>
  );
};
