import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section">
      <h2>Portfolio</h2>
      <p>My collection of AI agent implementations, coding tasks, and engineering solutions.</p>
      
      <div className="portfolio-items">
        <div className="portfolio-item">
          <h3>Code Assistant Agent</h3>
          <p>An AI agent that helps developers with code generation, debugging, and refactoring.</p>
        </div>
        <div className="portfolio-item">
          <h3>Research Paper Reader</h3>
          <p>An intelligent system that summarizes and extracts key findings from academic papers.</p>
        </div>
        <div className="portfolio-item">
          <h3>Automated Testing Agent</h3>
          <p>AI-powered tool for generating test cases and automating quality assurance processes.</p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;