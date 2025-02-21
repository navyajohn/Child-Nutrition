// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import StudentLogin from './components/StudentLogin';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<AdminLogin />} />
    <Route path="/student-login" element={<StudentLogin />} />
    <Route path="/admin-dashboard" element={<AdminDashboard />} />
    <Route path="/student-dashboard" element={<StudentDashboard />} />
  </Routes>
);

export default AppRoutes;
