// src/components/HealthNotices.js
import React, { useState } from 'react';
import './HealthNotices.css';

const HealthNotices = () => {
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState('');

  const addNotice = () => {
    if (newNotice.trim() !== '') {
      setNotices([...notices, newNotice]);
      setNewNotice('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && newNotice.trim() !== '') {
      addNotice();
    }
  };

  return (
    <div className="health-dashboard-container">
      <div className="health-content">
        <h2>Health Notices</h2>
        <div className="notice-input-group">
          <input
            type="text"
            className="notice-input"
            placeholder="Enter a new notice"
            value={newNotice}
            onChange={(e) => setNewNotice(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button className="notice-button" onClick={addNotice}>
            Add Notice
          </button>
        </div>
        <ul className="notices-list">
          {notices.map((notice, index) => (
            <li key={index} className="notice-item">
              {notice}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HealthNotices;