import './StudentLogin.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Replace with actual student login validation logic
    if (username === 'student' && password === 'student123') {
      navigate('/student-dashboard'); // Redirect to student dashboard
    } else {
      alert('Invalid student credentials');
    }
  };

  return (
    <div className="student-login-container">
      <div className="student-login-form">
        <h2>Student Login</h2>
        <form>
          <input
            type="text"
            className="student-form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="student-form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            onClick={handleLogin}
            className="student-btn student-btn-block"
            type="submit"
          >
            Login
          </button>
          <p>
            Not a student? <a href="/admin-login">Login as Admin</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default StudentLogin;
