import React from 'react';
import './LocalAIInitiatives.css';

const LocalAIInitiatives = () => {
  return (
    <section id="local-initiatives" className="section">
      <h2>Local AI Initiatives & Community</h2>
      <p>Exploring opportunities to contribute to Uruguay's growing AI ecosystem, particularly in Montevideo.</p>
      
      <div className="initiative-cards">
        <div className="initiative-card">
          <h3>Montevideo AI Meetups</h3>
          <p>Organizing and participating in local AI research discussions and networking events to build the Montevideo AI community.</p>
        </div>
        <div className="initiative-card">
          <h3>Educational Resources</h3>
          <p>Developing open-source learning materials and tutorials to help local developers learn AI concepts and tools.</p>
        </div>
        <div className="initiative-card">
          <h3>Talent Matching Platform</h3>
          <p>Creating platforms that connect local AI talent with opportunities in both startups and established companies.</p>
        </div>
        <div className="initiative-card">
          <h3>Research Collaboration</h3>
          <p>Facilitating collaboration between local universities, research institutions, and industry for impactful AI projects.</p>
        </div>
      </div>
    </section>
  );
};

export default LocalAIInitiatives;