import React from 'react';
import './ResearchSection.css';

const ResearchSection = () => {
  return (
    <section id="research" className="section">
      <h2>Current Research Focus</h2>
      <p>This section will contain information about my ongoing AI research projects and findings.</p>
      <div className="research-topics">
        <div className="topic-card">
          <h3>AI Agent Design</h3>
          <p>Exploring how to design intelligent agents that can reason, learn, and adapt in real-world environments.</p>
        </div>
        <div className="topic-card">
          <h3>Code Generation & Refactoring</h3>
          <p>Developing AI tools that assist developers with code creation, optimization, and maintenance tasks.</p>
        </div>
        <div className="topic-card">
          <h3>Explainable AI</h3>
          <p>Research into making AI decision-making processes more transparent and interpretable for users.</p>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;