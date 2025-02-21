import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import MealPlan from './components/MealPlan';
import { MealProvider } from './MealContext';
import HealthNotices from './components/HealthNotices';

function App() {
  return (
    <MealProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/meal-plan" element={<MealPlan />} />
          <Route path="/health-notices" element={<HealthNotices />} />
        </Routes>
      </Router>
    </MealProvider>
  );
}

export default App;
