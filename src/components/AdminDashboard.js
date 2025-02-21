// AdminDashboard.js
import './AdminDashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <div className="card">
          <h3>Update Weekly Meal Plan</h3>
          <p>Manage meal plans for students on a weekly basis.</p>
          <Link to="/meal-plan">
            <button className="button-blue">Go to Meal Plan</button>
          </Link>
        </div>
        <div className="card">
          <h3>Health Notices</h3>
          <p>Post health-related notices or checkup dates for students.</p>
          <Link to="/health-notices">
            <button className="button-green">Go to Health Notices</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;