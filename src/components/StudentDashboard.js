import React, { useContext, useState } from 'react';
import { MealContext } from '../MealContext';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const { meals } = useContext(MealContext);
  const [activeSection, setActiveSection] = useState('mealPlan'); // State to manage the active section

  return (
    <div className="student-dashboard-container">
      <div className="student-dashboard-content">
        <header className="student-dashboard-header">
          <h1>Student Dashboard</h1>
        </header>

        {/* Buttons for Navigation */}
        <div className="dashboard-buttons">
          <button
            className={`dashboard-button ${activeSection === 'mealPlan' ? 'active' : ''}`}
            onClick={() => setActiveSection('mealPlan')}
          >
            Meal Plan for the Current Week
          </button>
          <button
            className={`dashboard-button ${activeSection === 'healthNotices' ? 'active' : ''}`}
            onClick={() => setActiveSection('healthNotices')}
          >
            Health Notices
          </button>
        </div>

        {/* Meal Plan Section */}
        {activeSection === 'mealPlan' && (
          <div className="meal-plan-section">
            <h2>Meal Plan for the Current Week</h2>
            {Object.keys(meals).map((day) => (
              <div className="meal-day" key={day}>
                <h3>{day}</h3>
                <div className="meal-details">
                  <p>Breakfast: {meals[day].breakfast}</p>
                  <p>Lunch: {meals[day].lunch}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Health Notices Section */}
        {activeSection === 'healthNotices' && (
          <div className="health-notices-section">
            <h2>Health Notices</h2>
            <p>No health notices available at the moment. Please check back later!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
