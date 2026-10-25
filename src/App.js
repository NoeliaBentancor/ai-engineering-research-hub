import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import ResearchSection from './components/ResearchSection';
import PortfolioSection from './components/PortfolioSection';
import UruguayFocusSection from './components/UruguayFocusSection';
import LocalAIInitiatives from './components/LocalAIInitiatives';
import UruguayResearchSection from './components/UruguayResearchSection';
import DailyResearchSection from './components/DailyResearchSection';

function App() {
  const [dailyResearch, setDailyResearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for daily research (in a real app this would come from an API)
  const mockResearchData = [
    {
      id: 1,
      title: "Transformer Models for Code Generation",
      topic: "Application of transformer models in automated code generation",
      findings: "New research shows that large language models fine-tuned on code datasets can generate 30% more accurate code compared to previous approaches, particularly in Python and JavaScript domains.",
      link: "https://arxiv.org/abs/2310.12345",
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    {
      id: 2,
      title: "Explainable AI in Medical Diagnostics",
      topic: "Interpretable machine learning for medical decision making",
      findings: "Recent advances in attention visualization techniques help radiologists better understand AI model decisions, leading to 25% improvement in clinical acceptance rates.",
      link: "https://arxiv.org/abs/2310.67890",
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },
    {
      id: 3,
      title: "Federated Learning for Edge Devices",
      topic: "Privacy-preserving machine learning on resource-constrained hardware",
      findings: "New federated learning frameworks now support training on devices with as little as 512MB RAM, making AI deployment more accessible to IoT applications.",
      link: "https://arxiv.org/abs/2310.23456",
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  ];

  useEffect(() => {
    // Simulate API call to fetch daily research
    const fetchData = async () => {
      setIsLoading(false);
      // In a real implementation, this would be:
      // const response = await fetch('/api/daily-research');
      // const data = await response.json();

      // Using mock data for now
      setTimeout(() => {
        setDailyResearch(mockResearchData);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <AboutSection />
        <ResearchSection />
        <UruguayFocusSection />
        <LocalAIInitiatives />
        <UruguayResearchSection />
        <PortfolioSection />
        <DailyResearchSection research={dailyResearch} isLoading={isLoading} />
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} AI Engineering Research Hub</p>
      </footer>
    </div>
  );
}

export default App;