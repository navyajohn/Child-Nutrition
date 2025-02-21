// src/components/GrowthMonitor.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

const GrowthMonitor = () => {
  const [data, setData] = useState([]);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const handleAddEntry = () => {
    if (height && weight) {
      const newData = [...data, { height: parseFloat(height), weight: parseFloat(weight), date: new Date() }];
      setData(newData);
      setHeight('');
      setWeight('');
    } else {
      alert("Please enter both height and weight!");
    }
  };

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Enter height in cm and weight in kg.
    </Tooltip>
  );

  const chartData = {
    labels: data.map(entry => entry.date.toLocaleDateString()),
    datasets: [
      {
        label: 'Height (cm)',
        data: data.map(entry => entry.height),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Weight (kg)',
        data: data.map(entry => entry.weight),
        borderColor: 'rgba(255,99,132,1)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Growth Monitor</h2>
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
        <p>Track your child’s growth over time</p>
      </OverlayTrigger>

      <div className="form-group">
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="form-control"
          placeholder="Enter height"
        />
      </div>
      <div className="form-group">
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="form-control"
          placeholder="Enter weight"
        />
      </div>
      <Button variant="primary" onClick={handleAddEntry}>Add Entry</Button>

      {data.length > 0 && (
        <div className="chart-container mt-4">
          <h3>Growth Chart</h3>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
};

export default GrowthMonitor;
