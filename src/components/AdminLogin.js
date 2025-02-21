import './AdminLogin.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/admin-dashboard');
    } else {
      alert('Invalid admin credentials');
    }
  };

  return (
    <div className="page-container">
      {/* Main Content Section */}
      <div className="login-container">
        <div className="login-form">
          <h2>Admin Login</h2>
          <form>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              onClick={handleLogin}
              className="btn btn-primary btn-block"
              type="submit"
            >
              Login
            </button>
            <p>
              Not an Admin? <a href="/student-login">Login as Student</a>
            </p>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <h3>Contact Us</h3>
        <p>
          We are committed to working together to improve child nutrition and
          healthcare in our community.
        </p>
        <p>
          If you are interested in supporting our children, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> admin@example.com<br />
          <strong>Phone:</strong> +91-123-456-7890
        </p>
      </footer>
    </div>
  );
}

export default AdminLogin;
