import React from 'react';
import './UruguayFocusSection.css';

const UruguayFocusSection = () => {
  return (
    <section id="uruguay-focus" className="section">
      <h2>Uruguay AI Development Focus</h2>
      <p>This portfolio emphasizes my interest in developing AI solutions specifically for Uruguay, with a focus on Montevideo's unique opportunities and challenges.</p>
      
      <div className="uruguay-topics">
        <div className="topic-card">
          <h3>Smart City Solutions</h3>
          <p>Exploring how AI can improve urban planning, transportation systems, and public services in Montevideo.</p>
        </div>
        <div className="topic-card">
          <h3>Local Talent Development</h3>
          <p>Building platforms and resources to help develop local AI expertise and connect talent with opportunities.</p>
        </div>
        <div className="topic-card">
          <h3>Ethics & Governance</h3>
          <p>Research into responsible AI development practices that consider Uruguay's regulatory environment and social values.</p>
        </div>
        <div className="topic-card">
          <h3>Community Building</h3>
          <p>Creating networks and platforms for AI professionals, researchers, and entrepreneurs in Uruguay.</p>
        </div>
      </div>
    </section>
  );
};

export default UruguayFocusSection;