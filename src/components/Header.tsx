import { useState } from 'react';

interface HeaderProps {
  scenarioName: string;
  scenarioData: {
    scenarioType: string;
    scenarioTime: number;
    purpose: string;
    learning_objectives: string[];
    required_simulation_tools: string[];
    intended_participants: string[];
  };
}

const Header = ({ scenarioName, scenarioData }: HeaderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <header className="header">
      <div className="header-main">
        <h1 className="header-title">{scenarioName}</h1>
        <button 
          className="header-info-btn"
          onClick={toggleExpanded}
          aria-label="Toggle scenario details"
        >
          <div className={`info-icon ${isExpanded ? 'expanded' : ''}`}>
            ℹ️
          </div>
        </button>
      </div>
      
      {isExpanded && (
        <div className="header-details">
          <div className="detail-grid">
            <div className="detail-item">
              <span className="detail-label">Type:</span>
              <span className="detail-value">{scenarioData.scenarioType}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Duration:</span>
              <span className="detail-value">{scenarioData.scenarioTime} mins</span>
            </div>
          </div>
          
          <div className="detail-section">
            <h3 className="detail-heading">Purpose</h3>
            <p className="detail-text">{scenarioData.purpose}</p>
          </div>
          
          <div className="detail-section">
            <h3 className="detail-heading">Learning Objectives</h3>
            <ul className="detail-list">
              {scenarioData.learning_objectives.map((objective, index) => (
                <li key={index} className="detail-list-item">{objective}</li>
              ))}
            </ul>
          </div>
          
          <div className="detail-section">
            <h3 className="detail-heading">Required Tools</h3>
            <ul className="detail-list">
              {scenarioData.required_simulation_tools.map((tool, index) => (
                <li key={index} className="detail-list-item">{tool}</li>
              ))}
            </ul>
          </div>
          
          <div className="detail-section">
            <h3 className="detail-heading">Participants</h3>
            <ul className="detail-list">
              {scenarioData.intended_participants.map((participant, index) => (
                <li key={index} className="detail-list-item">{participant}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;