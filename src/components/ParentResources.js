// src/components/ParentResources.js
import React, { useState } from 'react';
import { Collapse, Button } from 'react-bootstrap';

const ParentResources = () => {
  const resources = [
    { title: 'Affordable Nutritional Foods', content: 'Consider buying seasonal fruits and vegetables...' },
    { title: 'Quick and Healthy Breakfast Recipe', content: 'Try an oatmeal bowl with fruits and nuts...' },
    { title: 'Hydration Tips', content: 'Encourage children to drink plenty of water...' },
    { title: 'Budget-Friendly Snacks', content: 'Healthy snacks like carrots, cucumbers...' },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      <h2>Parent Resources</h2>
      {resources.map((resource, index) => (
        <div key={index} className="mb-3">
          <Button
            variant="link"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-controls={`resource-collapse-${index}`}
            aria-expanded={openIndex === index}
          >
            {resource.title}
          </Button>
          <Collapse in={openIndex === index}>
            <div id={`resource-collapse-${index}`}>
              <p>{resource.content}</p>
            </div>
          </Collapse>
        </div>
      ))}
    </div>
  );
};

export default ParentResources;
