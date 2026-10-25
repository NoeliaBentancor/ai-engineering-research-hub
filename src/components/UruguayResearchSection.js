import React from 'react';
import './UruguayResearchSection.css';

const UruguayResearchSection = () => {
  return (
    <section id="uruguay-research" className="section">
      <h2>Uruguay-Specific AI Research</h2>
      <p>Exploring how AI can address local challenges and opportunities in Uruguay, particularly in Montevideo.</p>
      
      <div className="research-focus">
        <div className="focus-item">
          <h3>Smart Transportation Systems</h3>
          <p>Using AI to optimize public transportation routes and reduce congestion in Montevideo's urban areas.</p>
        </div>
        <div className="focus-item">
          <h3>Agricultural Innovation</h3>
          <p>Applying machine learning to improve agricultural productivity and sustainability in Uruguay's rural areas.</p>
        </div>
        <div className="focus-item">
          <h3>Cultural Heritage Preservation</h3>
          <p>Developing AI tools to digitize and preserve Uruguay's rich cultural and historical heritage.</p>
        </div>
        <div className="focus-item">
          <h3>Healthcare Access</h3>
          <p>Creating AI solutions to improve healthcare delivery in underserved communities across Uruguay.</p>
        </div>
      </div>
    </section>
  );
};

export default UruguayResearchSection;