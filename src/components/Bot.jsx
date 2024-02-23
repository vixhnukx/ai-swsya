import React, { useState } from 'react';
import './Bot.css';

function Bot() {
    const [isActive, setIsActive] = useState(false);

    // Simulate response processing
    const processResponse = () => {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 2000); // Simulating a 2-second response time
    };
  
    return (
      <>
        <div className="siri-container" onClick={processResponse}>
          <div className={`siri ${isActive ? 'active' : ''}`}></div>
        </div>
        <div className="response ">
          <h5>Response Content</h5>
        </div>
      </>
    );
}

export default Bot;
