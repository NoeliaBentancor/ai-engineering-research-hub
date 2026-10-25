import React from 'react';
import './DailyResearchSection.css';

const DailyResearchSection = ({ research, isLoading }) => {
  if (isLoading) {
    return (
      <section id="daily-research" className="section">
        <h2>Daily AI Research Updates</h2>
        <div className="loading">Loading latest research...</div>
      </section>
    );
  }

  return (
    <section id="daily-research" className="section">
      <h2>Daily AI Research Updates</h2>
      {research.length > 0 ? (
        <div className="research-container">
          {research.map((item) => (
            <div key={item.id} className="research-item">
              <h3>{item.title}</h3>
              <p><strong>Research Topic:</strong> {item.topic}</p>
              <p><strong>Findings:</strong> {item.findings}</p>
              <p><strong>Link:</strong> <a href={item.link} target="_blank" rel="noopener noreferrer">Read more</a></p>
              <p className="update-date">Last updated: {item.date}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No research data available.</p>
      )}
    </section>
  );
};

export default DailyResearchSection;