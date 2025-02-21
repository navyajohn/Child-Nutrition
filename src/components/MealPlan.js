// MealPlan.js
import React, { useContext, useState } from 'react';
import { MealContext } from '../MealContext';
import './AdminDashboard.css';

const MealPlan = () => {
  const { meals, updateMeal } = useContext(MealContext);
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (day, mealType, value) => {
    setInputValues((prev) => ({
      ...prev,
      [day]: { ...prev[day], [mealType]: value },
    }));
  };

  const handleUpdate = (day, mealType) => {
    const newMeal = inputValues[day]?.[mealType];
    if (newMeal) {
      updateMeal(day, mealType, newMeal);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Meal Plan Management</h1>
        <div className="meal-plan-section">
          {Object.keys(meals).map((day) => (
            <div key={day} className="card">
              <h3>{day}</h3>
              <div className="meal-input-group">
                <p>
                  <strong>Breakfast:</strong> {meals[day].breakfast}
                </p>
                <div className="input-button-group">
                  <input
                    type="text"
                    placeholder="Update breakfast"
                    onChange={(e) => handleInputChange(day, 'breakfast', e.target.value)}
                    className="meal-input"
                  />
                  <button 
                    className="button-blue"
                    onClick={() => handleUpdate(day, 'breakfast')}
                  >
                    Update
                  </button>
                </div>
              </div>
              <div className="meal-input-group">
                <p>
                  <strong>Lunch:</strong> {meals[day].lunch}
                </p>
                <div className="input-button-group">
                  <input
                    type="text"
                    placeholder="Update lunch"
                    onChange={(e) => handleInputChange(day, 'lunch', e.target.value)}
                    className="meal-input"
                  />
                  <button 
                    className="button-blue"
                    onClick={() => handleUpdate(day, 'lunch')}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealPlan;